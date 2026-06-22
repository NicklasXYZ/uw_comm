import rawData from '../../data/data.json';
import { referenceAnchor, slugify } from './anchors';

export interface Message {
	id: string;
	premise: string;
	message: string;
	messageVariations: string[];
	description: string;
	meaning: string;
	messageEncoder: string;
	messageDecoder: string;
	spatialContext: string;
	temporalContext: string;
	type: string;
	categories: string[];
	references: string[];
}

interface MessageData {
	messages: Message[];
	updated?: string;
}

export const messageData = rawData as MessageData;

export function messageTitle(message: Message): string {
	return (
		message.message ||
		message.premise ||
		message.messageVariations.find((variation) => variation.trim()) ||
		'Untitled message'
	);
}

export const messages = [...messageData.messages].sort((a, b) =>
	messageTitle(a).localeCompare(messageTitle(b), 'en', { sensitivity: 'base' })
);

export const dataUpdated = messageData.updated;

export const messageCount = messages.length;

export const categories = [
	{ abbreviation: 'CO', name: 'Coordination' },
	{ abbreviation: 'EE', name: 'Emotions & Expressions' },
	{ abbreviation: 'EC', name: 'Environmental Conditions' },
	{ abbreviation: 'ECM', name: 'Equipment & Communication' },
	{ abbreviation: 'NP', name: 'Navigation & Positioning' },
	{ abbreviation: 'SE', name: 'Safety & Emergency' },
	{ abbreviation: 'WS', name: 'Wildlife Sightings' },
	{ abbreviation: 'QI', name: 'Quantitative Information' }
];

export const categoryNameByAbbreviation = new Map(
	categories.map((category) => [category.abbreviation, category.name])
);

export function uniqueValues(selector: (message: Message) => string): string[] {
	return [...new Set(messages.map(selector).filter(Boolean))].sort((a, b) =>
		a.localeCompare(b, 'en', { sensitivity: 'base' })
	);
}

export const filterOptions = {
	encoders: uniqueValues((message) => message.messageEncoder),
	decoders: uniqueValues((message) => message.messageDecoder),
	spatialContexts: uniqueValues((message) => message.spatialContext),
	temporalContexts: uniqueValues((message) => message.temporalContext),
	types: uniqueValues((message) => message.type),
	categories: categories.map((category) => category.abbreviation)
};

export function getMessageById(id: string): Message | undefined {
	return messages.find((message) => message.id === id);
}

export function asList(value: string | string[] | undefined): string[] {
	if (!value) return [];
	return Array.isArray(value) ? value : [value];
}

export function categoryLabel(abbreviation: string): string {
	const name = categoryNameByAbbreviation.get(abbreviation);
	return name ? `${abbreviation} - ${name}` : abbreviation;
}

export function categoryHref(abbreviation: string): string {
	const name = categoryNameByAbbreviation.get(abbreviation);
	const anchor = name ? slugify(`(${abbreviation}) ${name}`) : slugify(abbreviation);
	return `/about/#${anchor}`;
}

const actorAnchorByValue = new Map([
	['AUV', 'autonomous-underwater-vehicles'],
	['Diver', 'divers'],
	['Surface Attendant', 'surface-supporting-personnel']
]);

function aboutHref(anchor: string): string {
	return `/about/#${anchor}`;
}

export function actorHref(value: string): string {
	return aboutHref(actorAnchorByValue.get(value) ?? slugify(value));
}

export function contextHref(value: string): string {
	return aboutHref(slugify(value));
}

export function methodHref(value: string): string {
	return aboutHref(slugify(value));
}

export function referenceHref(refName: string): string {
	return aboutHref(referenceAnchor(refName));
}

export function searchText(message: Message): string {
	return [
		message.message,
		message.premise,
		message.description,
		message.meaning,
		message.messageEncoder,
		message.messageDecoder,
		message.spatialContext,
		message.temporalContext,
		message.type,
		...message.categories,
		...message.references,
		...message.messageVariations
	]
		.filter(Boolean)
		.join(' ')
		.toLowerCase();
}
