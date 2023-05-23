import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchMessages } from '$lib/server/api';

export const load: PageServerLoad = async ({setHeaders}) => {
	try {
		let messageMap = await fetchMessages();
		const messageValues = Array.from(messageMap.values())	
		setHeaders({ 'cache-control': 'max-age=360' });
		return { messageValues };
	} catch (err) {
		throw error(404, {
			message: 'Message details were not found!'
		})
	}
}
