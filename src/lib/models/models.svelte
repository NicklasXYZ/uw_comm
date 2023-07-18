<script lang="ts" context="module">
	/**
	 * Describe the object that fully describes a pre-formatted message.
	 */
	 export interface Message {
		id: string;
		premise: string;
		message: string;
		messageVariations: string[];
		description: string;
		meaning: string;
		messageEncoder: string;
		messageDecoder: string;
		spatialContext: string;
		temporalContext: string;
		type: string;
		categories: string[];
		references: string[];
	}

	/**
	 * Describe the object that is used to present a short summary of a pre-formatted
	 * message.
	 */
	 export interface MessageShort {
		id: string;
		message: string;
		messageEncoder: string;
		messageDecoder: string;
		spatialContext: string;
		temporalContext: string;
		type: string;
	}

	/**
	 * Describe the object that is used to organize the various pre-formatted
	 * message categories.
	 */
	export interface MessageCategory {
		id: string;
		name: string;
		abbreviation: string;
	}

	/*
	 * Describe the object that is used to keep track of the graph state.
	 */
	export interface GraphState {
		hoveredNode?: string;
		hoveredNodeColor?: string;
		hoveredNeighbors?: Set<string>;
		selectedNode?: string;
	}

	/*
	 * Describe the object that is used to keep track of the currently selected
	 * filtering options.
	 */
	export interface FilteringState {
		messageEncoderDiver: boolean;
		messageEncoderSurfaceAttendant: boolean;
		messageEncoderAUV: boolean;
		messageDecoderDiver: boolean;
		messageDecoderSurfaceAttendant: boolean;
		messageDecoderAUV: boolean;
		spatialContextColocated: boolean;
		spatialContextRemote: boolean;
		temporalContextSync: boolean;
		temporalContextAsync: boolean;
	}
</script>
