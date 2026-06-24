interface SearchField {
	name: string;
	value: string;
	weight: number;
}

interface SearchRecord {
	id: string;
	title: string;
	fields: SearchField[];
}

interface PreparedField extends SearchField {
	normalized: string;
	words: Set<string>;
}

interface CatalogueEntry {
	record: SearchRecord;
	card: HTMLElement;
	originalIndex: number;
	titleElement: HTMLElement | null;
	originalTitle: string;
	fields: PreparedField[];
}

interface RankedEntry {
	entry: CatalogueEntry;
	score: number;
	visible: boolean;
}

const queryParam = 'q';
const emptyFilterValue = '__none';
const listGroups = new Set(['category']);

function normalizeText(value: string): string {
	return value
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/&/g, ' and ')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function tokenize(value: string): string[] {
	const normalized = normalizeText(value);
	if (!normalized) return [];
	return [...new Set(normalized.split(' ').filter(Boolean))];
}

function isSearchRecord(value: unknown): value is SearchRecord {
	if (!value || typeof value !== 'object') return false;
	const record = value as SearchRecord;
	return (
		typeof record.id === 'string' &&
		typeof record.title === 'string' &&
		Array.isArray(record.fields)
	);
}

function readSearchIndex(root: ParentNode): SearchRecord[] {
	const indexElement = root.querySelector<HTMLScriptElement>('[data-search-index]');
	if (!indexElement?.textContent) return [];

	try {
		const parsed = JSON.parse(indexElement.textContent) as unknown;
		return Array.isArray(parsed) ? parsed.filter(isSearchRecord) : [];
	} catch {
		return [];
	}
}

function prepareField(field: SearchField): PreparedField {
	const normalized = normalizeText(field.value);
	return {
		...field,
		normalized,
		words: new Set(normalized.split(' ').filter(Boolean))
	};
}

function tokenScore(field: PreparedField, token: string): number {
	if (!field.normalized.includes(token)) return 0;
	if (field.words.has(token)) return field.weight * 6;
	if ([...field.words].some((word) => word.startsWith(token))) return field.weight * 4;
	return field.weight * 2;
}

function scoreEntry(
	entry: CatalogueEntry,
	tokens: string[],
	normalizedQuery: string
): number | null {
	if (tokens.length === 0) return 0;

	let score = 0;
	for (const token of tokens) {
		const bestTokenScore = Math.max(...entry.fields.map((field) => tokenScore(field, token)));
		if (bestTokenScore <= 0) return null;
		score += bestTokenScore;
	}

	const phraseBoost = Math.max(
		0,
		...entry.fields.map((field) =>
			normalizedQuery && field.normalized.includes(normalizedQuery) ? field.weight * 3 : 0
		)
	);

	return score + phraseBoost;
}

function escapeRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function renderHighlightedTitle(entry: CatalogueEntry, tokens: string[]): void {
	const { titleElement, originalTitle } = entry;
	if (!titleElement) return;

	const highlightTokens = tokens
		.filter((token) => token.length > 1)
		.sort((a, b) => b.length - a.length);

	if (highlightTokens.length === 0) {
		titleElement.textContent = originalTitle;
		return;
	}

	const matcher = new RegExp(`(${highlightTokens.map(escapeRegExp).join('|')})`, 'gi');
	const fragment = document.createDocumentFragment();
	let cursor = 0;

	for (const match of originalTitle.matchAll(matcher)) {
		const matchedText = match[0];
		const index = match.index ?? 0;

		if (index > cursor) {
			fragment.append(document.createTextNode(originalTitle.slice(cursor, index)));
		}

		const mark = document.createElement('mark');
		mark.textContent = matchedText;
		fragment.append(mark);
		cursor = index + matchedText.length;
	}

	if (cursor < originalTitle.length) {
		fragment.append(document.createTextNode(originalTitle.slice(cursor)));
	}

	titleElement.replaceChildren(fragment);
}

function initCatalogueSearch(): void {
	const catalogue = document.querySelector<HTMLElement>('[data-catalogue]');
	if (!catalogue) return;
	const catalogueRoot: HTMLElement = catalogue;

	const searchInputElement = catalogueRoot.querySelector<HTMLInputElement>('[data-search]');
	const messageGridElement = catalogueRoot.querySelector<HTMLElement>('[data-message-grid]');
	const resultCountElement = catalogueRoot.querySelector<HTMLOutputElement>('[data-result-count]');
	const selectAllButton = catalogueRoot.querySelector<HTMLButtonElement>('[data-select-all]');
	const resetButton = catalogueRoot.querySelector<HTMLButtonElement>('[data-reset]');
	const clearSearchButton = catalogueRoot.querySelector<HTMLButtonElement>('[data-clear-search]');
	const emptyResetButton = catalogueRoot.querySelector<HTMLButtonElement>('[data-empty-reset]');
	const emptyState = catalogueRoot.querySelector<HTMLElement>('[data-empty-state]');
	const groups = (catalogueRoot.dataset.filterGroups ?? '').split(' ').filter(Boolean);
	const searchIndex = readSearchIndex(catalogueRoot);

	if (!searchInputElement || !messageGridElement || !resultCountElement || searchIndex.length === 0)
		return;

	const searchInput: HTMLInputElement = searchInputElement;
	const messageGrid: HTMLElement = messageGridElement;
	const resultCount: HTMLOutputElement = resultCountElement;

	const cardById = new Map(
		Array.from(catalogueRoot.querySelectorAll<HTMLElement>('[data-message-card]')).map((card) => [
			card.dataset.messageId,
			card
		])
	);

	const entries = searchIndex
		.map((record, originalIndex): CatalogueEntry | null => {
			const card = cardById.get(record.id);
			if (!card) return null;

			const titleElement = card.querySelector<HTMLElement>('[data-message-title]');
			return {
				record,
				card,
				originalIndex,
				titleElement,
				originalTitle: titleElement?.textContent?.trim() || record.title,
				fields: record.fields.map(prepareField)
			};
		})
		.filter((entry): entry is CatalogueEntry => Boolean(entry));

	function filterInputs(group?: string): HTMLInputElement[] {
		return Array.from(
			catalogueRoot.querySelectorAll<HTMLInputElement>('[data-filter-group]')
		).filter((input) => !group || input.dataset.filterGroup === group);
	}

	function selectedValues(group: string): Set<string> {
		return new Set(
			filterInputs(group)
				.filter((input) => input.checked)
				.map((input) => input.value)
		);
	}

	function matchesSingle(card: HTMLElement, group: string, selected: Set<string>): boolean {
		if (selected.size === 0) return false;
		return selected.has(card.dataset[group] ?? '');
	}

	function matchesList(card: HTMLElement, group: string, selected: Set<string>): boolean {
		if (selected.size === 0) return false;
		return (card.dataset[group] ?? '').split('|').some((value) => selected.has(value));
	}

	function matchesFilters(entry: CatalogueEntry): boolean {
		return groups.every((group) => {
			const selected = selectedValues(group);
			return listGroups.has(group)
				? matchesList(entry.card, group, selected)
				: matchesSingle(entry.card, group, selected);
		});
	}

	function hasActiveFilters(): boolean {
		return filterInputs().some((input) => !input.checked);
	}

	function updateUrlState(): void {
		const params = new URLSearchParams(window.location.search);
		const query = searchInput.value.trim();

		if (query) {
			params.set(queryParam, query);
		} else {
			params.delete(queryParam);
		}

		for (const group of groups) {
			params.delete(group);
			const inputs = filterInputs(group);
			const selected = inputs.filter((input) => input.checked);
			if (selected.length === 0) {
				params.set(group, emptyFilterValue);
			} else if (selected.length !== inputs.length) {
				selected.forEach((input) => params.append(group, input.value));
			}
		}

		const queryString = params.toString();
		const nextUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}${
			window.location.hash
		}`;
		window.history.replaceState(null, '', nextUrl);
	}

	function restoreUrlState(): void {
		const params = new URLSearchParams(window.location.search);
		searchInput.value = params.get(queryParam) ?? '';

		for (const group of groups) {
			const selected = params.getAll(group);
			if (selected.length === 0) continue;

			filterInputs(group).forEach((input) => {
				input.checked = !selected.includes(emptyFilterValue) && selected.includes(input.value);
			});
		}
	}

	function setAllFilters(checked: boolean): void {
		filterInputs().forEach((input) => {
			input.checked = checked;
		});
		applyFilters();
	}

	function resetCatalogue(): void {
		searchInput.value = '';
		setAllFilters(true);
		searchInput.focus();
	}

	function applyFilters(options: { updateUrl?: boolean } = {}): void {
		const { updateUrl = true } = options;
		const tokens = tokenize(searchInput.value);
		const normalizedQuery = normalizeText(searchInput.value);
		const rankedEntries: RankedEntry[] = entries.map((entry) => {
			const score = scoreEntry(entry, tokens, normalizedQuery);
			const visible = matchesFilters(entry) && score !== null;
			return {
				entry,
				score: score ?? 0,
				visible
			};
		});

		rankedEntries.sort((a, b) => {
			if (tokens.length > 0 && b.score !== a.score) return b.score - a.score;
			return a.entry.originalIndex - b.entry.originalIndex;
		});

		let visible = 0;
		for (const rankedEntry of rankedEntries) {
			const { entry } = rankedEntry;
			entry.card.hidden = !rankedEntry.visible;
			renderHighlightedTitle(entry, rankedEntry.visible ? tokens : []);
			if (rankedEntry.visible) visible += 1;
			messageGrid.append(entry.card);
		}

		const active = tokens.length > 0 || hasActiveFilters();
		resultCount.value = `${visible} ${active ? 'matching ' : ''}${
			visible === 1 ? 'message' : 'messages'
		}`;

		const inputs = filterInputs();
		const selectedCount = inputs.filter((input) => input.checked).length;
		if (selectAllButton) selectAllButton.disabled = selectedCount === inputs.length;
		if (emptyState) emptyState.hidden = visible > 0;
		if (clearSearchButton) clearSearchButton.disabled = tokens.length === 0;
		if (updateUrl) updateUrlState();
	}

	restoreUrlState();

	catalogueRoot.addEventListener('input', () => applyFilters());
	catalogueRoot.querySelector('[data-filters]')?.addEventListener('submit', (event) => {
		event.preventDefault();
	});
	selectAllButton?.addEventListener('click', () => setAllFilters(true));
	resetButton?.addEventListener('click', resetCatalogue);
	clearSearchButton?.addEventListener('click', () => {
		searchInput.value = '';
		applyFilters();
		searchInput.focus();
	});
	emptyResetButton?.addEventListener('click', resetCatalogue);

	applyFilters({ updateUrl: false });
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initCatalogueSearch, { once: true });
} else {
	initCatalogueSearch();
}
