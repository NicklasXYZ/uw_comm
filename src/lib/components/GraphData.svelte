<script lang="ts">
	import { getContext } from 'svelte';
	import FA2Layout from 'graphology-layout-forceatlas2/worker';
	import {
		COLOR_BG_SURFACE_600,
		COLOR_TERTIARY_500,
		messageCategories
	} from '$lib/utils/constants.svelte';
	import type { Message } from '$lib/models/models.svelte';

	const { getGraphInstance } = getContext('graphSharedState');
	const [graphInstance] = getGraphInstance();

	const HUB_SIZE: number = 15.0;
	const NODE_SIZE: number = 7.5;
	const EDGE_SIZE: number = 1.75;

	export let messageList: Message[];

	$: if (graphInstance) {
		/*
		 * Clear the graph.
		 */
		graphInstance.clear();

		/*
		 * Add nodes to the graph.
		 */
		for (let index = 0; index < messageList.length; index++) {
			if (!graphInstance._nodes.has(messageList[index].id)) {
				graphInstance.addNode(messageList[index].id, {
					x: 0,
					y: 0,
					size: NODE_SIZE,
					label: messageList[index].message,
					color: COLOR_BG_SURFACE_600
				});
			}
		}

		/*
		 * Add hubs to the graph.
		 */
		for (let index = 0; index < messageCategories.length; index++) {
			if (!graphInstance._nodes.has(messageCategories[index].id)) {
				graphInstance.addNode(messageCategories[index].id, {
					x: 0,
					y: 0,
					size: HUB_SIZE,
					label: messageCategories[index].name,
					color: COLOR_TERTIARY_500
				});
			}
		}

		/*
		 * Add edges to the graph.
		 */
		for (let outerIndex = 0; outerIndex < messageList.length; outerIndex++) {
			for (
				let innerIndex = 0;
				innerIndex < messageList[outerIndex].categories.length;
				innerIndex++
			) {
				for (let index1 = 0; index1 < messageCategories.length; index1++) {
					if (
						messageCategories[index1].abbreviation ===
						messageList[outerIndex].categories[innerIndex]
					) {
						graphInstance.addEdge(messageList[outerIndex].id, messageCategories[index1].id, {
							type: 'arrow',
							label: '',
							size: EDGE_SIZE,
							color: 'white'
						});
					}
				}
			}
		}

		/*
		 * Set the initial node and hub location before a layout algorithm is applied.
		 */
		graphInstance.nodes().forEach((node: string, i: number) => {
			const angle: number = (i * 2 * Math.PI) / graphInstance.order;
			graphInstance.setNodeAttribute(node, 'x', 100 * Math.cos(angle));
			graphInstance.setNodeAttribute(node, 'y', 100 * Math.sin(angle));
		});

		/*
		 * Set the layout algorithm parameters
		 */
		const layout = new FA2Layout(graphInstance, {
			settings: {
				gravity: 100,
				barnesHutOptimize: true,
				linLogMode: false,
				outboundAttractionDistribution: true,
				slowDown: 25,
				scalingRatio: 50
			}
		});

		/*
		 * To start the layout algorithm.
		 */
		layout.start();

		/*
		 * Callback function to stop running the layout algorithm.
		 */
		function stopWW() {
			layout.stop();
		}

		/*
		 * Stop running the layout algorithm after a number of seconds
		 * that is proportional to the size of input graph.
		 */
		setTimeout(stopWW, 2.0 * graphInstance.order);
	}
</script>
