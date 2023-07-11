<script lang="ts">
	import Fullscreen from 'svelte-fullscreen';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';

	import SigmaGraph from '$lib/components/SigmaGraph.svelte';
	import GraphNodes from '$lib/components/GraphNodes.svelte';
	import InfoDisplay from '$lib/components/InfoDisplay.svelte';
	import MessageCard from '$lib/components/messageCard.svelte';
	import { filterDimensions } from '$lib/utils/filters.svelte';
	import type { FilteringState } from '$lib/utils/filters.svelte';
	import type { GraphState } from '$lib/utils/utils.svelte';

	export let data: any;

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
			<div class="px-4 grid gap-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
				{#each filteredMessages as messageObject, index (index)}
					<MessageCard {messageObject} />
				{/each}
			</div>
		{:else if tabSet === 1}
			<!-- <div style="background-color: #2c3656"> -->
			<!-- <div style="background-color: "> -->
			<Fullscreen let:onRequest let:onExit>
				<!-- {filteredMessages.length} -->

				<SigmaGraph bind:state={graphState}>
					<!-- Display Some info about a selected node -->
					<!-- <div id="wrapper"> -->
					<!-- <div id="button-wrapper"> -->
					<!-- id="fullscreen-button" -->
					<div class="grid gap-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
						<div class="px-4">
							<div style="position: absolute; bottom: 0;" class="btn-group-vertical variant-filled">
								<!-- class="btn btn-lg variant-filled" -->
								<!-- style="position: relative; z-index: 1;" -->
								<button type="button" on:click={() => onRequest()}>Fullscreen</button>

								<!-- id="fullscreen-button" -->
								<!-- class="btn btn-lg variant-filled" -->
								<!-- style="position: relative; left: 0px; top: 0; z-index: 1;" -->
								<button type="button" on:click={() => onExit()}>Exit</button>
							</div>
						</div>

						<!-- <div class="overflow-hidden" style="right:0; bottom: 0"> -->
							<InfoDisplay state={graphState} {filteredMessages} />
						<!-- </div> -->
					</div>

					<GraphNodes bind:nodes={filteredMessages} />
				</SigmaGraph>
			</Fullscreen>
		{/if}
	</svelte:fragment>
</TabGroup>

<!-- Bottom Vertical Space -->
<div class="flex flex-col p-4 space-y-4" />

<style>
	/* Write your CSS here */
	#wrapper {
		position: relative;
		border: 1px solid #ffffff;
		width: 578px;
		height: 200px;
	}

	#button-wrapper {
		position: absolute;
		width: 30px;
		top: 2px;
		right: 2px;
	}

	#fullscreen-button {
		padding: 5px;
		width: 30px;
		margin: 0px 0px 2px 0px;
	}
</style>
