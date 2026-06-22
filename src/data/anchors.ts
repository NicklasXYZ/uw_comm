export function slugify(value: string): string {
	return value
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

export function referenceAnchor(refName: string): string {
	return `reference-${slugify(refName)}`;
}
