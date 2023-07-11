<script lang="ts">
	import Sigma from 'sigma';
	import Graph from 'graphology';
	import { onMount, setContext } from 'svelte';
	import { drawHover, drawLabel } from '$lib/utils/utils.svelte';
	import type { NodeDisplayData } from 'sigma/types';
	import type { Settings } from 'sigma/settings';
  import type { GraphState } from '$lib/utils/utils.svelte'

	export let state: GraphState;

	let refElement: HTMLElement | undefined = undefined;
	let graphInstance: Graph | undefined = undefined;
	let renderer: Sigma | undefined = undefined;

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

	function setHoveredNode(graphInstance: Graph, node?: string) {
		if (node) {
			state.hoveredNode = node;
			state.hoveredNodeColor = graphInstance.getNodeAttribute(node, 'color');
			state.hoveredNeighbors = new Set(graphInstance.neighbors(node));
		} else {
			state.hoveredNode = undefined;
			state.hoveredNeighbors = undefined;
		}

		// Refresh rendering:
		renderer.refresh();
	}

	onMount(() => {
		graphInstance = new Graph();
		if (!renderer) {
			renderer = new Sigma(graphInstance, refElement, settings);
			renderer.on('clickNode', ({ node }) => {
				state.clickedNode = node;
			});
		}
		renderer.on('enterNode', ({ node }) => {
			setHoveredNode(graphInstance, node);
			graphInstance.updateNodeAttribute(node, 'color', (_) => '#D41976');
		});

		renderer.on('leaveNode', (node) => {
			graphInstance.updateNodeAttribute(node.node, 'color', (_) => state.hoveredNodeColor);
			setHoveredNode(graphInstance, undefined);
		});

		// Render nodes accordingly to the internal state:
		// 1. If a node is selected, it is highlighted
		// 2. If there is query, all non-matching nodes are greyed
		// 3. If there is a hovered node, all non-neighbor nodes are greyed
		renderer.setSetting('nodeReducer', (node, data) => {
			const res: Partial<NodeDisplayData> = { ...data };

			if (state.hoveredNeighbors && state.hoveredNeighbors.has(node)) {
				if (res.color) {
					res.color = '#D41976';
				}
			}
			return res;
		});
	});
</script>

<div
	style="height: calc(105vh - 300px); position: relative; left: 0; top: 0; z-index: 0; background-color: #2c3656"
	bind:this={refElement}
>
	{#if graphInstance}
		<slot />
	{/if}
</div>
