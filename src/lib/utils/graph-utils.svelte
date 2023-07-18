<script lang="ts" context="module">
	import type { NodeDisplayData, PartialButFor, PlainObject } from 'sigma/types';
	import type { Settings } from 'sigma/settings';

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
		radius: number
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
	export function drawHover(
		context: CanvasRenderingContext2D,
		data: PlainObject,
		settings: PlainObject
	) {
		const size = settings.labelSize,
			font = settings.labelFont,
			weight = settings.labelWeight;

		context.font = `${weight} ${size}px ${font}`;

		// Then we draw the label background
		context.fillStyle = '#425181ff';
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
		context.shadowBlur = 8;
		context.shadowColor = '#000';

		const PADDING = 2;

		if (typeof data.label === 'string') {
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
			? data[settings.labelColor.attribute] || settings.labelColor.color || '#000'
			: settings.labelColor.color;

		context.fillStyle = color;
		context.font = `${weight} ${size}px ${font}`;
		context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
	}

	export function drawLabel(
		context: CanvasRenderingContext2D,
		data: PartialButFor<NodeDisplayData, 'x' | 'y' | 'size' | 'label' | 'color'>,
		settings: Settings
	): void {
		if (!data.label) return;

		const size = settings.labelSize;
		const font = settings.labelFont;
		const weight = settings.labelWeight;

		context.font = `${weight} ${size}px ${font}`;
		const width = context.measureText(data.label).width + 8;

		context.fillStyle = '#ffffffcc';
		context.fillRect(data.x + data.size, data.y + size / 3 - 15, width, 20);

		context.fillStyle = '#000';
		context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
	}
</script>
