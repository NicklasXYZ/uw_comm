<script lang="ts">
	// import type { PageData } from './$types';
	import MessageDetailCard from '$lib/components/messageDetailCard.svelte';

	// export let data: PageData;
	let message = data;
</script>

<svelte:head>
	<title>Details for message: "{message}"</title>
</svelte:head>

<div class="px-auto pt-2">
	<MessageDetailCard {message} />
</div>
