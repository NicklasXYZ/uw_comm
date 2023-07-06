<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import Sigma from 'sigma';
  import Graph from 'graphology';


  import { NodeDisplayData, PartialButFor, PlainObject } from "sigma/types";
  import { Settings } from "sigma/settings";
  import drawLabel from "sigma";
  // const TEXT_COLOR = "#000000";
  const TEXT_COLOR = "#ffffff";

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
    defaultNodeColor: "#495a8fff",
    // edgeColor:'#425181ff',
    // defaultLabelColor: "#FFFFFF",
    // enableEdgeHovering: true,
    // enableHovering: false,
    // drawEdges: true,
    labelFont: "system-ui",
    labelSize: 14,
    labelColor: { color: "white" },
    // renderLabels: true,
    hoverRenderer: drawHover,
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
  })
</script>

<div style="height: calc(125vh - 275px); position: relative" bind:this={refElement}>
  {#if graphInstance}
    <slot></slot>
  {/if}
</div>