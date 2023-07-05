<script lang="ts">
	import SigmaGraph from '$lib/components/SigmaGraph.svelte';
	// import GraphNode from '$lib/components/GraphNode.svelte';
	import GraphNodeAdd from '$lib/components/GraphNodeAdd.svelte';
	import GraphNodes from '$lib/components/GraphNodes.svelte';
	import GraphNodeRemove from '$lib/components/GraphNodeRemove.svelte';
	import GraphEdge from '$lib/components/GraphEdge.svelte';

	import { onMount, getContext } from 'svelte'
	import { random } from 'graphology-layout';


	import MessageCard from '$lib/components/messageCard.svelte';
	import { filterDimensions } from '$lib/utils/filters.svelte'
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import type { MessageShort } from '$lib/models/message';

	import Sigma from 'sigma';
  	import Graph from 'graphology';

	export let data: any;	

	// let refElement: HTMLElement = null
	// let cyInstance = null
	// 	const nodes = [
		//     { id: 'N1', label: 'Start' },
		//     { id: 'N2', label: '4' },
		//     { id: 'N4', label: '8' },
		//     { id: 'N5', label: '15' },
		//     { id: 'N3', label: '16' },
		//     { id: 'N6', label: '23' },
		//     { id: 'N7', label: '42' },
		//     { id: 'N8', label: 'End' }
		//   ]
		
		//   const edges = [
			//     { id: 'E1', source: 'N1', target: 'N2' },
			//     { id: 'E2', source: 'N2', target: 'N3' },
//     { id: 'E3', source: 'N3', target: 'N6' },
//     { id: 'E4', source: 'N2', target: 'N4' },
//     { id: 'E5', source: 'N4', target: 'N5' },
//     { id: 'E6', source: 'N5', target: 'N4', label: '2' },
//     { id: 'E7', source: 'N5', target: 'N6' },
//     { id: 'E8', source: 'N6', target: 'N7' },
//     { id: 'E9', source: 'N7', target: 'N7', label: '3' },
//     { id: 'E10', source: 'N7', target: 'N8' }
//   ]

	// function createGraph(referenceElement, dataIn) {
	// 	let graphInstance = new Graph();
	// 	for (let i = 0; i < dataIn.length; i++) {
	// 		graphInstance.addNode(
	// 			dataIn[i].id,
	// 			{
	// 				x: 0,
	// 				y: 0,
	// 				size: 20,
	// 				color: "red",
	// 				label: dataIn[i].id,
	// 			}
	// 			) 
	// 		}
	// 		return graphInstance
	// 		// return new Sigma(graphInstance, referenceElement);
	// }
    
	function *setMinus(A, B) {
      const setA = new Set(A);
      const setB = new Set(B);

      for (const v of setB.values()) {
        if (!setA.delete(v)) {
            yield v;
        }
      }

      for (const v of setA.values()) {
        yield v;
      }
    }

	// let searchTerm = '';
	let filteredMessages = data.messageValues;
	let messagesToRemove = []
	let selectedMessageIDs = []
	let allMessageIDs = data.messageValues.map(
		(dataIn) => (dataIn["id"])
	)
	// console.log(allMessageIDs)

	// cyInstance = createGraph(refElement, filteredMessages)
	// const renderer =  new Sigma(cyInstance, refElement);
	// let renderer;

	// Type and declare internal state:
	interface State {
		// hoveredNode?: string;
		// searchQuery: string;
		// State derived from query:
		selectedMessageIDs ?: Set<string>;
		allMessageIDs ?: Set<string>;
		messagesToRemove ?: Set<string>;
		// suggestions?: Set<string>;
		// State derived from hovered node:
		// hoveredNeighbors?: Set<string>;
		spatialContextColocated?: boolean;
		spatialContextRemote?: boolean;
		temporalContextSync?: boolean;
		temporalContextAsync?: boolean;
		
	}
	// console.log("Filtered Messages: ")
	// console.log(filteredMessages)
	// console.log()

	const state: State = {
		spatialContextColocated: true, 
		spatialContextRemote: true,
		temporalContextSync: true,
		temporalContextAsync: true,
		selectedMessageIDs: new Set(allMessageIDs),
		allMessageIDs: new Set(allMessageIDs),
		messagesToRemove: new Set([])
	};


	// $: spatialContextColocated = true;
	// $: spatialContextRemote = true;
	// $: temporalContextSync = true;
	// $: temporalContextAsync = true;
	// $: {
	// 	console.log("Update!")
	// 	if (!spatialContextColocated || !spatialContextRemote || !temporalContextSync || !temporalContextAsync) {
	// 		filteredMessages = filterDimensions(
	// 			data.messageValues,
	// 			spatialContextColocated,
	// 			spatialContextRemote,
	// 			temporalContextSync,
	// 			temporalContextAsync,
	// 		);
	// 		// if (refElement) {
	// 			// renderer = createGraph(refElement, filteredMessages)
	// 			// cyInstance = createGraph(refElement, filteredMessages)
	// 			// if (!renderer){
	// 				// renderer = new Sigma(cyInstance, refElement);
	// 			// }
	// 			// renderer.refesh()
	// 			// const positions = random(cyInstance);
	// 			// random.assign(cyInstance);
	// 		// }

	// 	} else {
	// 		filteredMessages = data.messageValues;
	// 		// if (refElement) {
	// 			// renderer = createGraph(refElement, filteredMessages)
	// 			// cyInstance = createGraph(refElement, filteredMessages)
	// 			// if (!renderer){
	// 			// 	renderer = new Sigma(cyInstance, refElement);					
	// 			// }
	// 			// renderer.refesh()
	// 			// const positions = random(cyInstance);
	// 			// random.assign(cyInstance);
	// 		// }
	// 	}
	// }
	

	$: state.spatialContextColocated = true;
	$: state.spatialContextRemote = true;
	$: state.temporalContextSync = true;
	$: state.temporalContextAsync = true;
	$: {
		if (!state.spatialContextColocated || !state.spatialContextRemote || !state.temporalContextSync || !state.temporalContextAsync) {
			filteredMessages = filterDimensions(
				data.messageValues,
				state.spatialContextColocated,
				state.spatialContextRemote,
				state.temporalContextSync,
				state.temporalContextAsync,
			);
		} else {
			// console.log("Option 2")
			filteredMessages = data.messageValues;
			

			// state.selectedMessageIDs = new Set(selectedMessageIDs)
			// state.messagesToRemove = new Set(setMinus(state.selectedMessageIDs, state.allMessageIDs))
			// // console.log("Selected messages: " + state.selectedMessageIDs.size + " All messages: " + state.allMessageIDs.size)
			// messagesToRemove = Array.from(state.messagesToRemove)
			// console.log("2 --")
			// console.log("Selected messages: " + state.selectedMessageIDs.size)
			// console.log("All messages     : " + state.allMessageIDs.size)
			// console.log("Remove messages  : " + state.messagesToRemove.size)
			// console.log(state.messagesToRemove)
			// console.log("\n")

			// if (refElement) {
				// renderer = createGraph(refElement, filteredMessages)
				// cyInstance = createGraph(refElement, filteredMessages)
				// if (!renderer){
				// 	renderer = new Sigma(cyInstance, refElement);					
				// }
				// renderer.refesh()
				// const positions = random(cyInstance);
				// random.assign(cyInstance);
			// }
		}
		selectedMessageIDs = filteredMessages.map(
				(dataIn) => (dataIn["id"])
			)
		state.selectedMessageIDs = new Set(selectedMessageIDs)
		state.messagesToRemove = new Set(setMinus(state.selectedMessageIDs, state.allMessageIDs))
		messagesToRemove = Array.from(state.messagesToRemove)
		console.log("1 --")
		console.log("Selected messages: " + state.selectedMessageIDs.size)
		console.log("All messages     : " + state.allMessageIDs.size)
		console.log("Remove messages  : " + state.messagesToRemove.size)
		console.log(state.messagesToRemove)
		console.log("\n")
	}

	let tabSet: number = 0;


	// onMount(() => {
	// 	cyInstance = new Graph();
	// 	const renderer = new Sigma(cyInstance, refElement);
	// })
</script>

<svelte:head>
	<title>Underwater Communication</title>
</svelte:head>

<!-- Message Search Input -->
<!-- <input -->
	<!-- class="m-4 w-3/5 rounded-md text-lg p-2 border-2 border-gray-200" -->
	<!-- type="text" -->
	<!-- bind:value={searchTerm} -->
	<!-- placeholder="Search countries" -->
<!-- /> -->

<div class="flex flex-col py-4 space-y-4">
<Accordion class="relative rounded-lg shadow bg-surface-100-800-token" hover="hover:bg-surface-600" padding="px-4 py-2">
		<AccordionItem>
		<svelte:fragment slot="lead"></svelte:fragment>
		<svelte:fragment slot="summary">
				Filtering & Sorting
			</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="flex flex-col p-4 space-y-4">

					<h1 class="font-semibold">Filtering</h1>
					<hr class="!border-t-2"/>

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
								<input id="checkbox-list-5" type="checkbox" bind:checked={state.spatialContextColocated} class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2">
								<label for="checkbox-list-5" class="w-full py-3 ml-2 text-sm font-medium text-white">Colocated</label>
							</div>
						</li>
						<li class="w-full">
							<div class="flex items-center pl-3">
								<input id="checkbox-list-6" type="checkbox" bind:checked={state.spatialContextRemote} class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2">
								<label for="checkbox-list-6" class="w-full py-3 ml-2 text-sm font-medium text-white">Remote</label>
							</div>
						</li>
					</ul>

					<h1>Temporal Context</h1>
					<ul class="text-surface-300 rounded-lg sm:flex bg-surface-500">
						<li class="w-full border-white sm:border-b-0 sm:border-r">
							<div class="flex items-center pl-3">
								<input id="checkbox-list-7" type="checkbox" bind:checked={state.temporalContextSync} class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2">
								<label for="checkbox-list-7" class="w-full py-3 ml-2 text-sm font-medium text-white">Synchronous</label>
							</div>
						</li>
						<li class="w-full">
							<div class="flex items-center pl-3">
								<input id="checkbox-list-8" type="checkbox" bind:checked={state.temporalContextAsync} class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2">
								<label for="checkbox-list-8" class="w-full py-3 ml-2 text-sm font-medium text-white">Asynchronous</label>
							</div>
						</li>
					</ul>
					<h1 class="font-semibold">Sorting</h1>
					<hr class="!border-t-2"/>
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
				<!-- {#each filteredMessages as messageObject, index (index)} -->
				{#each filteredMessages as messageObject, index (index)}
					<MessageCard {messageObject} />
				{/each}
			</div>			
		{:else if tabSet === 1}
			{filteredMessages.length}
			<!-- <div style="height: calc(100vh - 215px)" bind:this={refElement} class="container"> -->
				<!-- {#if cyInstance} -->
				<!-- {/if} -->
			<!-- </div> -->

			<!-- <Graph {filteredMessages}/> -->
			<!-- <SigmaGraph state={state}> -->
			<SigmaGraph>
				<GraphNodes toAdd={filteredMessages}/>
				 <!-- toRemove={messagesToRemove}/> -->

				<!-- {#if messagesToRemove.length != 0} -->
					<!-- {#each messagesToRemove as node} -->
						<!-- <GraphNodeRemove node={node}/> -->
						<!-- {/each} -->
				<!-- {/if} -->
				<!-- {#if filteredMessages.length != 0} -->
					<!-- {#each filteredMessages as node} -->
						<!-- <GraphNodeAdd node={node}/> -->
					<!-- {/each} -->
				<!-- {/if} -->
			</SigmaGraph>
				<!-- {#if messagesToRemove.length != 0} -->

					<!-- <GraphNode node={node} state={state}/> -->
					<!-- {/each} -->
				<!-- {/if} -->
					<!-- <GraphNode {filteredMessages}/> -->
				<!-- {#each edges as edge} -->
				  <!-- <GraphEdge edge={edge}/> -->
				<!-- {/each} -->
		{/if}
	</svelte:fragment>
</TabGroup>

<!-- Bottom Vertical Space -->
<div class="flex flex-col p-4 space-y-4"></div>
