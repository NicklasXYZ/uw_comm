<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { filterDimensions } from '$lib/utils/filters.svelte';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import ListView from '$lib/components/ListView.svelte';
	import NetworkView from '$lib/components/NetworkView.svelte';
	import type { GraphState, FilteringState, Message } from '$lib/models/models.svelte';

	export let data: any;

	/*
	 * Main object representing the current set of messages to display
	 * in the list view or network view.
	 */
	let messageList: Message[] = data.messageList;

	/*
	 * Main object representing the current graph state.
	 */
	let graphState: GraphState = {};

	/*
	 * Main object representing the currently selected messge filtering
	 * options.
	 */
	const state: FilteringState = {
		spatialContextColocated: true,
		spatialContextRemote: true,
		temporalContextSync: true,
		temporalContextAsync: true
	};

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
			messageList = filterDimensions(
				data.messageList,
				state.spatialContextColocated,
				state.spatialContextRemote,
				state.temporalContextSync,
				state.temporalContextAsync
			);
		} else {
			messageList = data.messageList;
		}
	}

	/*
	 * Keep track of which tab the user is currently on:
	 * 0: list view
	 * 1: network view
	 */
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
			<ListView bind:messageList />
		{:else if tabSet === 1}
			<NetworkView bind:graphState bind:messageList/>
		{/if}
	</svelte:fragment>
</TabGroup>

<!-- Bottom Vertical Space -->
<div class="flex flex-col p-4 space-y-4" />
