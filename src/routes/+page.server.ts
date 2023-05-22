import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchMessages } from '$lib/server/api';

export const ssr = false;

export const load: PageServerLoad = async ({setHeaders}) => {
	try {
		let m = await fetchMessages();
		const messages = Array.from(m.values())	
		setHeaders({ 'cache-control': 'max-age=360' });
		return { messages };
	} catch (err) {
		throw error(404, {
			message: 'Message details not found'
		})
	}
}
