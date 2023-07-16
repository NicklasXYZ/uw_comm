<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { filterDimensions } from '$lib/utils/filters.svelte';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import Fullscreen from 'svelte-fullscreen';
	import SigmaGraph from '$lib/components/SigmaGraph.svelte';
	import GraphNodes from '$lib/components/GraphNodes.svelte';
	import InfoDisplay from '$lib/components/InfoDisplay.svelte';
	import MessageCard from '$lib/components/messageCard.svelte';
	import type { FilteringState } from '$lib/utils/filters.svelte';
	import type { GraphState } from '$lib/utils/graph-utils.svelte';

	export let data: any;

	const fullscreenLoc = '../assets/fullscreen.svg';
	const fullscreenExitLoc = '../assets/fullscreen_exit.svg';

	let filteredMessages = data.messageValues;

	const state: FilteringState = {
		spatialContextColocated: true,
		spatialContextRemote: true,
		temporalContextSync: true,
		temporalContextAsync: true
	};

	let graphState: GraphState = {};

	$: state.spatialContextColocated = true;
	$: state.spatialContextRemote = true;
	$: state.temporalContextSync = true;
	$: state.temporalContextAsync = true;
	$: {
		if (
			!state.spatialContextColocated ||
			!state.spatialContextRemote ||
			!state.temporalContextSync ||
			!state.temporalContextAsync
		) {
			filteredMessages = filterDimensions(
				data.messageValues,
				state.spatialContextColocated,
				state.spatialContextRemote,
				state.temporalContextSync,
				state.temporalContextAsync
			);
		} else {
			filteredMessages = data.messageValues;
		}
	}

	let tabSet: number = 0;
</script>

<svelte:head>
	<title>Underwater Communication</title>
</svelte:head>

<div class="flex flex-col py-4 space-y-4">
	<Accordion
		class="relative rounded-lg shadow bg-surface-100-800-token"
		hover="hover:bg-surface-600"
		padding="px-4 py-2"
	>
		<AccordionItem>
			<svelte:fragment slot="lead" />
			<svelte:fragment slot="summary">Filtering & Sorting</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="flex flex-col p-4 space-y-4">
					<h1 class="font-semibold">Filtering</h1>
					<hr class="!border-t-2" />

					<!-- <h1>Message Encoder</h1>
					<ul class="text-surface-300 rounded-lg sm:flex bg-surface-500">
						<li class="w-full border-white sm:border-b-0 sm:border-r">
							<div class="flex items-center pl-3">
								<input id="checkbox-list-1" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2">
								<label for="checkbox-list-1" class="w-full py-3 ml-2 text-sm font-medium text-white">Diver</label>
							</div>
						</li>
						<li class="w-full">
							<div class="flex items-center pl-3">
								<input id="checkbox-list-2" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2">
								<label for="checkbox-list-2" class="w-full py-3 ml-2 text-sm font-medium text-white">Surface Attendant</label>
							</div>
						</li>
					</ul> -->

					<!-- <h1>Message Decoder</h1>
					<ul class="text-surface-300 rounded-lg sm:flex bg-surface-500">
						<li class="w-full border-white sm:border-b-0 sm:border-r">
							<div class="flex items-center pl-3">
								<input id="checkbox-list-3" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2">
								<label for="checkbox-list-3" class="w-full py-3 ml-2 text-sm font-medium text-white">Diver</label>
							</div>
						</li>
						<li class="w-full">
							<div class="flex items-center pl-3">
								<input id="checkbox-list-4" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2">
								<label for="checkbox-list-4" class="w-full py-3 ml-2 text-sm font-medium text-white">Surface Attendant</label>
							</div>
						</li>
					</ul> -->

					<h1>Spatial Context</h1>
					<ul class="text-surface-300 rounded-lg sm:flex bg-surface-500">
						<li class="w-full border-white sm:border-b-0 sm:border-r">
							<div class="flex items-center pl-3">
								<input
									id="checkbox-list-5"
									type="checkbox"
									bind:checked={state.spatialContextColocated}
									class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"
								/>
								<label for="checkbox-list-5" class="w-full py-3 ml-2 text-sm font-medium text-white"
									>Colocated</label
								>
							</div>
						</li>
						<li class="w-full">
							<div class="flex items-center pl-3">
								<input
									id="checkbox-list-6"
									type="checkbox"
									bind:checked={state.spatialContextRemote}
									class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"
								/>
								<label for="checkbox-list-6" class="w-full py-3 ml-2 text-sm font-medium text-white"
									>Remote</label
								>
							</div>
						</li>
					</ul>

					<h1>Temporal Context</h1>
					<ul class="text-surface-300 rounded-lg sm:flex bg-surface-500">
						<li class="w-full border-white sm:border-b-0 sm:border-r">
							<div class="flex items-center pl-3">
								<input
									id="checkbox-list-7"
									type="checkbox"
									bind:checked={state.temporalContextSync}
									class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"
								/>
								<label for="checkbox-list-7" class="w-full py-3 ml-2 text-sm font-medium text-white"
									>Synchronous</label
								>
							</div>
						</li>
						<li class="w-full">
							<div class="flex items-center pl-3">
								<input
									id="checkbox-list-8"
									type="checkbox"
									bind:checked={state.temporalContextAsync}
									class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"
								/>
								<label for="checkbox-list-8" class="w-full py-3 ml-2 text-sm font-medium text-white"
									>Asynchronous</label
								>
							</div>
						</li>
					</ul>
					<h1 class="font-semibold">Sorting</h1>
					<hr class="!border-t-2" />
					TODO...
				</div>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>

<!-- Data View Tabs -->
<TabGroup
	hover="hover:bg-surface-600"
	justify="justify-center"
	regionPanel=""
	class="pb-4 bg-surface-100-800-token rounded-lg"
	padding="px-4 py-2"
>
	<Tab bind:group={tabSet} name="tab1" value={0}>List View</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>Network View</Tab>

	<!-- Tab Panels -->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<div class="px-4 py-0 grid gap-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
				{#each filteredMessages as messageObject, index (index)}
					<MessageCard {messageObject} />
				{/each}
			</div>
		{:else if tabSet === 1}
			<Fullscreen let:onRequest let:onExit>
				<SigmaGraph bind:state={graphState}>
					<!-- Display Some info about a selected node -->
					<div class="px-4">
						<div style="position: absolute; bottom: 0; width: 250px" class="py-14">
							<InfoDisplay state={graphState} {filteredMessages} />
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
					<GraphNodes bind:nodes={filteredMessages} />
				</SigmaGraph>
			</Fullscreen>
		{/if}
	</svelte:fragment>
</TabGroup>

<!-- Bottom Vertical Space -->
<div class="flex flex-col p-4 space-y-4" />
