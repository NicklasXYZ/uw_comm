<script lang="ts">
	import type { PageData } from './$types';
	import type { Message } from '$lib/models/models.svelte';
	import MessageCardDetailed from '$lib/components/MessageCardDetailed.svelte';
	export let data: PageData;
	let messageObject: Message = data.message;
</script>

<svelte:head>
	<title>Details for message: "{messageObject.message}"</title>
</svelte:head>

<div class="px-auto pt-2">
	<MessageCardDetailed {messageObject} />
</div>
