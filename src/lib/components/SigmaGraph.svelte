<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import Sigma from 'sigma';
  import Graph from 'graphology';
  import { Settings, NodeDisplayData } from "sigma/types";
  import { PartialButFor, PlainObject } from "sigma/types";

  export let state;

  let refElement: HTMLElement = null
  let graphInstance = null
  let renderer = null


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

  const color = settings.labelColor.attribute
      ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000"
      : settings.labelColor.color;

    context.fillStyle = color;
    context.font = `${weight} ${size}px ${font}`;
    context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);    
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
    defaultNodeType: "circle",
    renderLabels: true,
    labelDensity: 0.07,
    labelGridCellSize: 60,
    labelRenderedSizeThreshold: 15,
    labelFont: "system-ui",
    labelSize: 14,
    labelColor: { color: "white" },
    allowInvalidContainer: true,
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
        ({ node }) => {
            state.clickedNode = node;
          }
        )
    }
    renderer.on("enterNode", ({ node }) => {
      setHoveredNode(graphInstance, node);
      graphInstance.updateNodeAttribute(
        node, "color", _ => "#D41976"
      )
    });

    renderer.on("leaveNode", (node) => {
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

    if (state.hoveredNeighbors && state.hoveredNeighbors.has(node)) {
      if (res.color) {
        res.color = "#D41976"
      }
  }
  return res;
});
  })
</script>


<div style="height: calc(105vh - 300px); position: relative; left: 0; top: 0; z-index: 0;" bind:this={refElement}>
    {#if graphInstance}
      <slot></slot>
    {/if}
</div>