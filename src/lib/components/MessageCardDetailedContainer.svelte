<script lang="ts">
	import type { Message } from '$lib/models/models.svelte';
	import MessageCardDetailed from '$lib/components/MessageCardDetailed.svelte';
	export let messageObject: Message;
</script>

<div class="flex flex-col p-4 space-y-4">
	<div class="relative w-full max-h-full">
		<div class="relative rounded-lg shadow bg-surface-500">

			<MessageCardDetailed {messageObject}/>

			<!-- Add a close button to return to list view -->
			<div class="text-center">
				<a href="/">
					<button
						onclick="self.close()"
						class="py-1 px-2 text-white bg-surface-300 rounded-lg w-full/2 focus:outline-none"
					>
						Close window
					</button>
				</a>
			</div>

			<!-- Bottom vertical space -->
			<div class="flex flex-col p-2 space-y-2" />
		</div>
	</div>
</div>
