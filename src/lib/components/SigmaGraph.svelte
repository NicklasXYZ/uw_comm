<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import Sigma from 'sigma';
  import Graph from 'graphology';

  import { Coordinates, EdgeDisplayData, NodeDisplayData } from "sigma/types";

  import { PartialButFor, PlainObject } from "sigma/types";
  import { Settings } from "sigma/settings";
  // import drawLabel from "sigma";
	import { redirect } from '@sveltejs/kit';
  // const TEXT_COLOR = "#000000";
  const TEXT_COLOR = "#ffffff";

  export let state;

  let refElement: HTMLElement = null
  let graphInstance = null
  let renderer = null

    /**
   * @param color Hex value format: #ffffff or ffffff
   * @param decimal lighten or darken decimal value, example 0.5 to lighten by 50% or 1.5 to darken by 50%.
   */
  function shadeColor(color: string, decimal: number): string {
      const base = color.startsWith('#') ? 1 : 0;

      let r = parseInt(color.substring(base, 3), 16);
      let g = parseInt(color.substring(base + 2, 5), 16);
      let b = parseInt(color.substring(base + 4, 7), 16);

      r = Math.round(r / decimal);
      g = Math.round(g / decimal);
      b = Math.round(b / decimal);

      r = (r < 255)? r : 255;
      g = (g < 255)? g : 255;
      b = (b < 255)? b : 255;

      const rr = ((r.toString(16).length === 1)? `0${r.toString(16)}` : r.toString(16));
      const gg = ((g.toString(16).length === 1)? `0${g.toString(16)}` : g.toString(16));
      const bb = ((b.toString(16).length === 1)? `0${b.toString(16)}` : b.toString(16));

      return `#${rr}${gg}${bb}`;
  }


    /**
   * This function draw in the input canvas 2D context a rectangle.
   * It only deals with tracing the path, and does not fill or stroke.
   */
  export function drawRoundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ): void {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  /**
  * Custom hover renderer
  */
  export function drawHover(context: CanvasRenderingContext2D, data: PlainObject, settings: PlainObject) {
    const size = settings.labelSize,
    font = settings.labelFont,
    weight = settings.labelWeight;

  context.font = `${weight} ${size}px ${font}`;

  // Then we draw the label background
  context.fillStyle = "#425181ff";
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 8;
  context.shadowColor = "#000";

  const PADDING = 2;

  if (typeof data.label === "string") {
    const textWidth = context.measureText(data.label).width,
      boxWidth = Math.round(textWidth + 10),
      boxHeight = Math.round(size + 4 * PADDING),
      radius = Math.max(data.size, size / 2) + PADDING;

    const angleRadian = Math.asin(boxHeight / 2 / radius);
    const xDeltaCoord = Math.sqrt(Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)));

    context.beginPath();
    context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
    context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
    context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
    context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
    context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
    context.closePath();
    context.fill();
  } else {
    context.beginPath();
    context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  }

  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;

    // const size = settings.labelSize;
    // const font = settings.labelFont;
    // const weight = settings.labelWeight;
    // const subLabelSize = size - 2;

    // const label = data.label;
    // const subLabel = data.tag !== "unknown" ? data.tag : "";
    // const clusterLabel = data.clusterLabel;

    // // Then we draw the label background
    // context.beginPath();
    // // context.fillStyle = "#fff";
    // context.fillStyle = "#425181ff";
    // context.shadowOffsetX = 0;
    // context.shadowOffsetY = 2;
    // context.shadowBlur = 8;
    // context.shadowColor = "#000";

    // context.font = `${weight} ${size}px ${font}`;
    // const labelWidth = context.measureText(label).width;
    // context.font = `${weight} ${subLabelSize}px ${font}`;
    // const subLabelWidth = subLabel ? context.measureText(subLabel).width : 0;
    // context.font = `${weight} ${subLabelSize}px ${font}`;
    // const clusterLabelWidth = clusterLabel ? context.measureText(clusterLabel).width : 0;

    // const textWidth = Math.max(labelWidth, subLabelWidth, clusterLabelWidth);

    // const x = Math.round(data.x);
    // const y = Math.round(data.y);
    // const w = Math.round(textWidth + size / 2 + data.size + 3);
    // const hLabel = Math.round(size / 2 + 4);
    // const hSubLabel = subLabel ? Math.round(subLabelSize / 2 + 9) : 0;
    // const hClusterLabel = Math.round(subLabelSize / 2 + 9);

    // drawRoundRect(context, x, y - hSubLabel - 12, w, hClusterLabel + hLabel + hSubLabel + 12, 5);
    // context.closePath();
    // context.fill();

    // context.shadowOffsetX = 0;
    // context.shadowOffsetY = 0;
    // context.shadowBlur = 0;

    // const size = settings.labelSize,
    // font = settings.labelFont,
    // weight = settings.labelWeight,
    const color = settings.labelColor.attribute
      ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000"
      : settings.labelColor.color;

    context.fillStyle = color;
    context.font = `${weight} ${size}px ${font}`;

    context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
    
    // And finally we draw the labels
    // context.fillStyle = TEXT_COLOR;
    // context.font = `${weight} ${size}px ${font}`;
    // context.fillText(label, data.x + data.size + 3, data.y + size / 3);

    // if (subLabel) {
    //   context.fillStyle = TEXT_COLOR;
    //   context.font = `${weight} ${subLabelSize}px ${font}`;
    //   context.fillText(subLabel, data.x + data.size + 3, data.y - (2 * size) / 3 - 2);
    // }

    // context.fillStyle = data.color;
    // context.font = `${weight} ${subLabelSize}px ${font}`;
    // context.fillText(clusterLabel, data.x + data.size + 3, data.y + size / 3 + 3 + subLabelSize);
  }
  function addAlpha(color: string, opacity: number): string {
    //if it has an alpha, remove it
    if (color.length > 7)
        color = color.substring(0, color.length - 2);

    // coerce values so ti is between 0 and 1.
    const _opacity = Math.round(Math.min(Math.max(opacity, 0), 1) * 255);
    let opacityHex = _opacity.toString(16).toUpperCase()

    // opacities near 0 need a trailing 0
    if (opacityHex.length == 1)
        opacityHex = "0" + opacityHex;

    return color + opacityHex;
    // coerce values so ti is between 0 and 1.
    // const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    // return color + _opacity.toString(16).toUpperCase();
}
 function drawLabel(
  context: CanvasRenderingContext2D,
  data: PartialButFor<NodeDisplayData, "x" | "y" | "size" | "label" | "color">,
  settings: Settings,
): void {
  if (!data.label) return;

  const size = settings.labelSize
  const font = settings.labelFont,
  const weight = settings.labelWeight;

  context.font = `${weight} ${size}px ${font}`;
  const width = context.measureText(data.label).width + 8;

  context.fillStyle = "#ffffffcc";
  context.fillRect(data.x + data.size, data.y + size / 3 - 15, width, 20);

  context.fillStyle = "#000";
  context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}

  const settings = {
    // minArrowSize: 20,
    // defaultEdgeType: "curvedArrow",
    defaultNodeType: "circle",
    // arrowSizeRatio: 10,
    // defaultEdgeLabelColor: "#FFFFFF",
    // defaultEdgeHoverColor: "yellow",
    // edgeHoverColor: 'default',
    // defaultEdgeColor: "red",
    // nodeHoverColor: "#425181ff",
    // defaultNodeColor: "#495a8fff",
    // 495a8fff
    // edgeColor:'#425181ff',
    // defaultLabelColor: "#FFFFFF",
    // enableEdgeHovering: true,
    // enableHovering: false,
    // drawEdges: true,
    // labelDensity: 0.5,
    renderLabels: true,
    labelDensity: 0.07,
    labelGridCellSize: 60,
    labelRenderedSizeThreshold: 15,
    labelFont: "system-ui",
    labelSize: 14,
    labelColor: { color: "white" },
    // minNodeSize: 45,
    // renderLabels: true,
    hoverRenderer: drawHover,
    labelRenderer: drawLabel
}

  function setHoveredNode(graphInstance, node?: string) {
    if (node) {
      state.hoveredNode = node;
      state.hoveredNodeColor = graphInstance.getNodeAttribute(node, "color")
      state.hoveredNeighbors = new Set(graphInstance.neighbors(node));
    } else {
      state.hoveredNode = undefined;
      state.hoveredNeighbors = undefined;
    }

    // Refresh rendering:
    renderer.refresh();
  }

  setContext('graphSharedState', {
    getGraphInstance: () => [graphInstance]
  })

  onMount(() => {    
    graphInstance = new Graph();
    if (!renderer){
      renderer = new Sigma(graphInstance, refElement, settings);
      renderer.on(
        "clickNode",
        ({ node }) => console.log(node))
        // ({ node }) => window.open(`/message/${node}`, "_blank")
    }
    renderer.on("enterNode", ({ node }) => {
      setHoveredNode(graphInstance, node);
      graphInstance.updateNodeAttribute(
        node, "color", _ => "#D41976"
      )
      // console.log("Entering: ")
      // console.log(node)
      // graphInstance.updateNode(
      //   node,
      //   attr => {
      //     return {
      //     ...attr,
      //     color: "red"
      //   };
      // }
      // )
    });

    renderer.on("leaveNode", (node) => {
      // console.log("Leaving: ")
      // console.log(node.node)
      graphInstance.updateNodeAttribute(
        node.node, "color", _ => state.hoveredNodeColor
      )
      setHoveredNode(graphInstance, undefined);
    });

    // Render nodes accordingly to the internal state:
// 1. If a node is selected, it is highlighted
// 2. If there is query, all non-matching nodes are greyed
// 3. If there is a hovered node, all non-neighbor nodes are greyed
renderer.setSetting("nodeReducer", (node, data) => {
  const res: Partial<NodeDisplayData> = { ...data };

  // if (state.hoveredNeighbors && !state.hoveredNeighbors.has(node) && state.hoveredNode !== node) {
    // if (state.hoveredNeighbors && state.hoveredNeighbors.has(node) && state.hoveredNode !== node) {
    if (state.hoveredNeighbors && state.hoveredNeighbors.has(node)) {
    // res.label = "";
    // res.color = "#f6f6f6";
    // res.color = "#2c3656ff";
    // res.color = "#425181ff"
    // res.color = "#2c3656cc";
    // res.zIndex = 100
    // res.hidden = true
    if (res.color) {
      // res.color = shadeColor(res.color, 1.5)
      // res.color = addAlpha(res.color, 0.25)
      res.color = "#D41976"
      // res.highlighted = true
    }
    // console.log()
    // console.log("" + state.hoveredNode + " --> " + node)
    // if (state.hoveredNode == node) {
    //   res.color = "red"

    // }
    
    // console.log(res.color)
    // res.color = "white";
  }

  // if (state.selectedNode === node) {
  //   res.highlighted = true;
  // } 
  // else if (state.suggestions && !state.suggestions.has(node)) {
  //   res.label = "";
  //   res.color = "#f6f6f6";
  // }

  return res;
});

// Render edges accordingly to the internal state:
// 1. If a node is hovered, the edge is hidden if it is not connected to the
//    node
// renderer.setSetting("edgeReducer", (edge, data) => {
//   const res: Partial<EdgeDisplayData> = { ...data };
//   // if (state.hoveredNode && !graphInstance.hasExtremity(edge, graphInstance.hoveredNode)) {
//     // if (state.hoveredNode && !graphInstance.hasExtremity(edge, graphInstance.hoveredNode)) {
//     if (state.hoveredNode && !graphInstance.hasExtremity(edge, graphInstance.hoveredNode)) {
//     // res.hidden = true;
//     res.size = 0;
//     // res.color = "#2c3656cc";
//     // res.color = "red";
//     // res.color = addAlpha(res.color, 0.5)
//     if (res.color) {
//       // res.color = shadeColor(res.color, 5.5)
//       // res.color = addAlpha(res.color, 0.25)
//     }
  
//   }
//   // if (state.suggestions && (!state.suggestions.has(graph.source(edge)) || !state.suggestions.has(graph.target(edge)))) {
//   //   res.hidden = true;
//   // }

//   return res;
// });

    // Bind graph interactions:

  })
</script>

<!-- <div style="height: calc(125vh - 275px); position: relative" bind:this={refElement}> -->
  <div style="height: calc(105vh - 300px); position: relative" bind:this={refElement}>
    {#if graphInstance}
    <slot></slot>
  {/if}
</div>