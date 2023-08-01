<script lang="ts">
	import Sigma from 'sigma';
	import Graph from 'graphology';
	import { onMount, setContext } from 'svelte';
	import { drawHover, drawLabel } from '$lib/utils/graph-utils.svelte';
	import { COLOR_ERROR_500 } from '$lib/utils/constants.svelte';
	import type { NodeDisplayData } from 'sigma/types';
	import type { Settings } from 'sigma/settings';
	import type { GraphState } from '$lib/models/models.svelte';

	export let graphState: GraphState;

	let refElement: HTMLElement;
	let graphInstance: Graph;
	let renderer: Sigma;

	setContext('graphSharedState', {
		getGraphInstance: () => [graphInstance]
	});

	const settings: Settings = {
		defaultNodeType: 'circle',
		renderLabels: true,
		labelDensity: 0.07,
		labelGridCellSize: 60,
		labelRenderedSizeThreshold: 15,
		labelFont: 'system-ui',
		labelSize: 14,
		labelColor: { color: 'white' },
		allowInvalidContainer: true,
		hoverRenderer: drawHover,
		labelRenderer: drawLabel,
		hideEdgesOnMove: false,
		hideLabelsOnMove: false,
		renderEdgeLabels: false,
		enableEdgeClickEvents: false,
		enableEdgeWheelEvents: false,
		enableEdgeHoverEvents: false,
		defaultNodeColor: '',
		defaultEdgeColor: '',
		defaultEdgeType: '',
		labelWeight: '',
		edgeLabelFont: '',
		edgeLabelSize: 0,
		edgeLabelWeight: '',
		edgeLabelColor: {
			attribute: '',
			color: undefined
		},
		stagePadding: 0,
		nodeReducer: null,
		edgeReducer: null,
		zIndex: false,
		minCameraRatio: null,
		maxCameraRatio: null,
		edgeLabelRenderer: undefined,
		nodeProgramClasses: {},
		nodeHoverProgramClasses: {},
		edgeProgramClasses: {}
	};

	function setHoveredNode(graphInstance: Graph, node?: string): void {
		if (node) {
			graphState.hoveredNode = node;
			graphState.hoveredNodeColor = graphInstance.getNodeAttribute(node, 'color');
			graphState.hoveredNeighbors = new Set(graphInstance.neighbors(node));
		} else {
			graphState.hoveredNode = undefined;
			graphState.hoveredNeighbors = undefined;
		}

		// Refresh the graph rendering
		renderer.refresh();
	}

	onMount(() => {
		graphInstance = new Graph();

		renderer = new Sigma(graphInstance, refElement, settings);

		/*
		 * Set the selected node when a user clicks a specific node in the graph.
		 */
		renderer.on('clickNode', ({ node }) => {
			graphState.selectedNode = node;
		});
		/*
		 * Start highlighting the node that is currently being hovered by the mouse pointer.
		 */
		renderer.on('enterNode', ({ node }) => {
			setHoveredNode(graphInstance, node);
			graphInstance.updateNodeAttribute(node, 'color', (_) => COLOR_ERROR_500);
		});

		/*
		 * Stop highlighting the node once the mouse pointer, currently hovering the node, leaves it.
		 * The color of the node is changed back to its original/initial color.
		 */
		renderer.on('leaveNode', (node) => {
			graphInstance.updateNodeAttribute(node.node, 'color', (_) => graphState.hoveredNodeColor);
			setHoveredNode(graphInstance, undefined);
		});

		/*
		 * Render graph nodes accordingly to the internal state:
		 * 1. If a node is selected, it is highlighted
		 * 2. If there is a hovered node, all neighbor nodes are highlighted as well
		 */
		renderer.setSetting('nodeReducer', (node, data) => {
			const res: Partial<NodeDisplayData> = { ...data };
			if (graphState.hoveredNeighbors && graphState.hoveredNeighbors.has(node)) {
				if (res.color) {
					res.color = COLOR_ERROR_500;
				}
			}
			return res;
		});
	});
</script>

<div
	style="height: calc(110vh - 300px); position: relative; left: 0; top: 0; z-index: 0; background-color: #2c3656"
	bind:this={refElement}
>
	{#if graphInstance}
		<slot />
	{/if}
</div>
