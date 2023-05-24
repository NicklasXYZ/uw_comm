import type { Message } from '$lib/models/message';

const MESSAGE_DATA_URL = 'https://raw.githubusercontent.com/NicklasXYZ/uw_comm/main/data/data.json'

// Fetch JSON data
export const fetchMessages = async () => {
	const res = await fetch(MESSAGE_DATA_URL);
	if (res.ok) {
		const data = await res.json();
		let messages = data.messages.map((data) => (
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
