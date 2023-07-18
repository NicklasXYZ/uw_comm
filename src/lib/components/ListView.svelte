<script lang="ts">
    import MessageCardShortContainer from '$lib/components/MessageCardShortContainer.svelte';
    import type { Message } from '$lib/models/models.svelte'

    export let messageList: Message[];

    const itemPadding: number = 2;
	const itemTopPadding: number = 4;
	const itemBottomPadding: number = 4;
</script>

<div class="px-4 py-0 grid gap-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
    {#each messageList as messageObject, index (index)}
        <MessageCardShortContainer {messageObject} {itemPadding} {itemTopPadding} {itemBottomPadding}/>
    {/each}
</div>
