<script lang="ts">
    import MessageCard from '$lib/components/messageCard.svelte';
    import type { Message } from '$lib/models/models.svelte'

    export let messageList: Message[]; 
</script>

<div class="px-4 py-0 grid gap-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
    {#each messageList as messageObject, index (index)}
        <MessageCard {messageObject} />
    {/each}
</div>
