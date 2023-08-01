<script lang="ts">
	import type { MessageShort } from '$lib/models/models.svelte';
	import MessageCardShort from '$lib/components/MessageCardShort.svelte';
	export let messageObject: MessageShort;

	export let itemPadding: number = 1;
	export let itemTopPadding: number = 2;
	export let itemBottomPadding: number = 2;
</script>

{#if messageObject.id}
	<!-- Card with hyperlink -->
	<a href={`/message/${messageObject.id}`} target="_blank">
		<!-- Card with hover effect -->
		<div class="rounded-lg shadow bg-surface-500 hover:bg-surface-600">
			<MessageCardShort {messageObject} {itemPadding} {itemTopPadding} {itemBottomPadding} />
		</div>
	</a>
{:else}
	<!-- Card without hyperlink and hover effect -->
	<div class="rounded-lg shadow bg-surface-500">
		<MessageCardShort {messageObject} {itemPadding} {itemTopPadding} {itemBottomPadding} />
	</div>
{/if}
