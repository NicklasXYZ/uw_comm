import { writable, get} from 'svelte/store';
import type { Message } from '$lib/models/message';

const MESSAGE_DATA = 'https://raw.githubusercontent.com/NicklasXYZ/uw_comms/main/data/data.json'

export const messages = writable(new Map())

// Fetch JSON data
export const fetchMessages = async () => {
	const res = await fetch(MESSAGE_DATA);
	if (res.ok) {
		const data = await res.json();
		let messageData = data["messages"].map((data) => (
			[
				data.id,
				{
					id: data.id,
					premise: data.premise,
					message: data.message,
					message_variations: data.message_variations,
					description: data.description,
					message_encoder: data.message_encoder,
					message_decoder: data.message_decoder,
					spatial_context: data.spatial_context,
					temporal_context: data.temporal_context,
					type: data.type,
					categories: data.categories,
					references: data.references,
				}
		]));
		return new Map(messageData);
	}
	throw new Error('Unable to fetch a list of countries');
};

// Fetch JSON data based on message ID
export const fetchMessageById = async (id: string) => {
	const messages = await fetchMessages();
	return messages.get(id)
};
