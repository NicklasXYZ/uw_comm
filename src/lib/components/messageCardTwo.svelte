<script lang="ts">
	import type { MessageShort } from '$lib/models/models.svelte';
	import MessageCardTwoEntry from '$lib/components/MessageCardTwoEntry.svelte';
	export let messageObject: MessageShort;
</script>

{#if messageObject}
	<!-- Card with hyperlink -->
	<a href={`/message/${messageObject.id}`} target="_blank">
		<!-- Card with hover effect -->
		<div class="rounded-lg shadow bg-surface-500 hover:bg-surface-600">
			<MessageCardTwoEntry {messageObject} />
		</div>
	</a>
{:else}
	<!-- Card without hyperlink and hover effect -->
	<div class="rounded-lg shadow bg-surface-500">
		<MessageCardTwoEntry {messageObject} />
	</div>
{/if}
