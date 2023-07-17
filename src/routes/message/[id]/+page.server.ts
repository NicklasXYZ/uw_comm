import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchMessageById } from '$lib/server/api.svelte';
import type { Message } from '$lib/models/models.svelte';

/** @type {import('./$types').PageLoad} */
export const load: PageServerLoad = async ({ params: { id }, setHeaders }) => {
	try {
		const message: Message | undefined = await fetchMessageById(id);
		setHeaders({ 'cache-control': 'max-age=360' });
		return { message };
	} catch (err) {
		throw error(404, {
			message: 'Message details were not found!'
		})
	}
};
