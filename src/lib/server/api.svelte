<script lang="ts" context="module">
	import type { Message } from '$lib/models/models.svelte';

	const MESSAGE_DATA_URL =
		'https://raw.githubusercontent.com/NicklasXYZ/uw_comm/main/data/data.json';

	// Fetch JSON data
	export const fetchMessages = async () => {
		const res = await fetch(MESSAGE_DATA_URL);
		if (res.ok) {
			const data = await res.json();
			let messages: Map<string, Message> = data.messages.map((data: Message) => [
				data.id,
				{
					id: data.id,
					premise: data.premise,
					message: data.message,
					messageVariations: data.messageVariations,
					description: data.description,
					meaning: data.meaning,
					messageEncoder: data.messageEncoder,
					messageDecoder: data.messageDecoder,
					spatialContext: data.spatialContext,
					temporalContext: data.temporalContext,
					type: data.type,
					categories: data.categories,
					references: data.references
				}
			]);
			return new Map(messages);
		}
		throw new Error('Unable to fetch a list of messages!');
	};

	// Fetch JSON data based on message ID
	export const fetchMessageById = async (id: string) => {
		const messages = await fetchMessages();
		const message: Message | undefined = messages.get(id);
		return message;
	};
</script>
