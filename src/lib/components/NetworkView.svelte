<script lang="ts">
	import Fullscreen from 'svelte-fullscreen';
	import type { Message, GraphState } from '$lib/models/models.svelte';
	import GraphData from '$lib/components/GraphData.svelte';
	import InfoDisplay from '$lib/components/InfoDisplay.svelte';

	import Graph from '$lib/components/Graph.svelte';

	/*
	 * Set the filepath to the fullscreen and fullscreen exit icons to
	 * display in the network view.
	 */
	const fullscreenLoc: string = '../assets/fullscreen.svg';
	const fullscreenExitLoc: string = '../assets/fullscreen_exit.svg';

	export let messageList: Message[];
	export let graphState: GraphState;
</script>

<Fullscreen let:onRequest let:onExit>
	<Graph bind:graphState>
		<div class="px-4">
			<div style="position: absolute; bottom: 0; width: 250px" class="py-14">
				<InfoDisplay {messageList} {graphState} />
			</div>

			<div
				style="position: absolute; bottom: 0; width: 250px; color: white"
				class="btn-group flex rounded-md shadow-sm variant-filled-tertiary"
			>
				<button
					type="button"
					on:click={() => onRequest()}
					style="color: white;"
					class="py-0 px-4 w-1/2"
				>
					<img src={fullscreenLoc} width="24" height="24" alt="Fullscreen" />
				</button>

				<button
					type="button"
					on:click={() => onExit()}
					style="color: white;"
					class="py-0 px-4 w-1/2"
				>
					<img src={fullscreenExitLoc} width="24" height="24" alt="Fullscreen exit" />
				</button>
			</div>
		</div>
		<GraphData bind:messageList />
	</Graph>
</Fullscreen>
