<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { filterDimensions } from '$lib/utils/filters.svelte';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import ListView from '$lib/components/ListView.svelte';
	import NetworkView from '$lib/components/NetworkView.svelte';
	import FilteringOptions from '$lib/components/FilteringOptions.svelte';
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
	let filteringState: FilteringState = {
		messageEncoderDiver: true,
		messageEncoderSurfaceAttendant: true,
		messageEncoderAUV: true,
		messageDecoderDiver: true,
		messageDecoderSurfaceAttendant: true,
		messageDecoderAUV: true,
		spatialContextColocated: true,
		spatialContextRemote: true,
		temporalContextSync: true,
		temporalContextAsync: true
	};

	$: filteringState.messageEncoderDiver = true
	$: filteringState.messageEncoderSurfaceAttendant = true
	$: filteringState.messageEncoderAUV = true
	$: filteringState.messageDecoderDiver = true
	$: filteringState.messageDecoderSurfaceAttendant = true
	$: filteringState.messageDecoderAUV = true
	$: filteringState.spatialContextColocated = true;
	$: filteringState.spatialContextRemote = true;
	$: filteringState.temporalContextSync = true;
	$: filteringState.temporalContextAsync = true;
	$: {
		if (
			!filteringState.messageEncoderDiver ||
			!filteringState.messageEncoderSurfaceAttendant ||
			!filteringState.messageEncoderAUV ||
			!filteringState.messageDecoderDiver ||
			!filteringState.messageDecoderSurfaceAttendant ||
			!filteringState.messageDecoderAUV ||
			!filteringState.spatialContextColocated ||
			!filteringState.spatialContextRemote ||
			!filteringState.temporalContextSync ||
			!filteringState.temporalContextAsync
		) {
			messageList = filterDimensions(
				data.messageList,
				filteringState.messageEncoderDiver,
				filteringState.messageEncoderSurfaceAttendant,
				filteringState.messageEncoderAUV,
				filteringState.messageDecoderDiver,
				filteringState.messageDecoderSurfaceAttendant,
				filteringState.messageDecoderAUV,
				filteringState.spatialContextColocated,
				filteringState.spatialContextRemote,
				filteringState.temporalContextSync,
				filteringState.temporalContextAsync
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
			<svelte:fragment slot="summary">Filtering Options</svelte:fragment>
			<svelte:fragment slot="content">
				<FilteringOptions bind:filteringState />
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
			<NetworkView bind:graphState bind:messageList />
		{/if}
	</svelte:fragment>
</TabGroup>

<!-- Bottom Vertical Space -->
<div class="flex flex-col p-4 space-y-4" />
