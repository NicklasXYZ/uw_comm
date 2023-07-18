import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchMessages } from '$lib/server/api.svelte';
import type { Message } from '$lib/models/models.svelte'

export const load: PageServerLoad = async ({ setHeaders }) => {
	try {
		let messageMap: Map<string, Message> = await fetchMessages();
		const messageList: Message[] = Array.from(messageMap.values())
		setHeaders({ 'cache-control': 'max-age=360' });
		return { messageList };
	} catch (err) {
		throw error(404, {
			message: 'Message details were not found!'
		})
	}
}
