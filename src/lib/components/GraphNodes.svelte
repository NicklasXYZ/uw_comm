<script lang="ts">
	import { getContext } from 'svelte';
	import FA2Layout from 'graphology-layout-forceatlas2/worker';
	import {
		COLOR_BG_SURFACE_600,
		COLOR_TERTIARY_500,
		messageCategories
	} from '$lib/utils/constants.svelte';

	const { getGraphInstance } = getContext('graphSharedState');
	const [graphInstance] = getGraphInstance();

	const HUB_SIZE: number = 15.0;
	const NODE_SIZE: number = 7.5;
	const EDGE_SIZE: number = 1.75;

	export let nodes;

	$: if (graphInstance) {
		/*
		 * Clear the graph.
		 */
		graphInstance.clear();

		/*
		 * Add nodes to the graph.
		 */
		for (let index = 0; index < nodes.length; index++) {
			if (!graphInstance._nodes.has(nodes[index].id)) {
				graphInstance.addNode(nodes[index].id, {
					x: 0,
					y: 0,
					size: NODE_SIZE,
					label: nodes[index].message,
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
		for (let outerIndex = 0; outerIndex < nodes.length; outerIndex++) {
			for (let innerIndex = 0; innerIndex < nodes[outerIndex].categories.length; innerIndex++) {
				for (let index1 = 0; index1 < messageCategories.length; index1++) {
					if (messageCategories[index1].abbreviation === nodes[outerIndex].categories[innerIndex]) {
						graphInstance.addEdge(nodes[outerIndex].id, messageCategories[index1].id, {
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
		graphInstance.nodes().forEach((node, i) => {
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
