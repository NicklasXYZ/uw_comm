import type { Message } from '$lib/models/message';

const MESSAGE_DATA_URL = 'https://raw.githubusercontent.com/NicklasXYZ/uw_comm/main/data/data.json'

export interface MessageData {
	id?: string;
	premise?: string;
	message?: string;
	message_variations?: string[];
	description?: string;
	meaning?: string;
	message_encoder?: string;
	message_decoder?: string;
	spatial_context?: string;
	temporal_context?: string;
	type?: string;
	categories?: string[];
	references?: string[];
}

// Fetch JSON data
export const fetchMessages = async () => {
	const res = await fetch(MESSAGE_DATA_URL);
	if (res.ok) {
		const data = await res.json();
		let messages: Map<string, MessageData> = data.messages.map((data: MessageData) => (
			[
				data.id,
				{
					id: data.id,
					premise: data.premise,
					message: data.message,
					message_variations: data.message_variations,
					description: data.description,
					meaning: data.meaning,
					message_encoder: data.message_encoder,
					message_decoder: data.message_decoder,
					spatial_context: data.spatial_context,
					temporal_context: data.temporal_context,
					type: data.type,
					categories: data.categories,
					references: data.references,
				}
			]));
		return new Map(messages);
	}
	throw new Error('Unable to fetch a list of messages!');
};

// Fetch JSON data based on message ID
export const fetchMessageById = async (id: string) => {
	const messages = await fetchMessages();
	const message: Message = messages.get(id)
	return message
};
