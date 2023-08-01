<script lang="ts" context="module">
	import type { Message } from '$lib/models/models.svelte';

	function checkMessageEncoder(
		message: Message,
		includeMessageEncoderDiver: boolean,
		includeMessageEncoderSurfaceAttendant: boolean,
		includeMessageEncoderAUV: boolean
	): boolean {
		return (
			(includeMessageEncoderDiver == true &&
				message.messageEncoder.trim().toLowerCase() == 'diver') ||
			(includeMessageEncoderSurfaceAttendant == true &&
				message.messageEncoder.trim().toLowerCase() == 'surface attendant') ||
			(includeMessageEncoderAUV == true && message.messageEncoder.trim().toLowerCase() == 'auv')
		);
	}

	function checkMessageDecoder(
		message: Message,
		includeMessageDecoderDiver: boolean,
		includeMessageDecoderSurfaceAttendant: boolean,
		includeMessageDecoderAUV: boolean
	): boolean {
		return (
			(includeMessageDecoderDiver == true &&
				message.messageDecoder.trim().toLowerCase() == 'diver') ||
			(includeMessageDecoderSurfaceAttendant == true &&
				message.messageDecoder.trim().toLowerCase() == 'surface attendant') ||
			(includeMessageDecoderAUV == true && message.messageDecoder.trim().toLowerCase() == 'auv')
		);
	}

	function checkSpatialContext(
		message: Message,
		includeSpatialContextColocated: boolean,
		includeSpatialContextRemote: boolean
	): boolean {
		return (
			(includeSpatialContextColocated == true &&
				message.spatialContext.trim().toLowerCase() == 'colocated') ||
			(includeSpatialContextRemote == true &&
				message.spatialContext.trim().toLowerCase() == 'remote')
		);
	}

	function checkTemporalContext(
		message: Message,
		includeTemporalContextSync: boolean,
		includeTemporalContextAsync: boolean
	): boolean {
		return (
			(includeTemporalContextSync == true &&
				message.temporalContext.trim().toLowerCase() == 'synchronous') ||
			(includeTemporalContextAsync == true &&
				message.temporalContext.trim().toLowerCase() == 'asynchronous')
		);
	}

	export function filterDimensions(
		messages: Message[],
		includeMessageEncoderDiver: boolean,
		includeMessageEncoderSurfaceAttendant: boolean,
		includeMessageEncoderAUV: boolean,
		includeMessageDecoderDiver: boolean,
		includeMessageDecoderSurfaceAttendant: boolean,
		includeMessageDecoderAUV: boolean,
		includeSpatialContextColocated: boolean,
		includeSpatialContextRemote: boolean,
		includeTemporalContextSync: boolean,
		includeTemporalContextAsync: boolean
	) {
		return messages.filter(
			(message: Message): boolean =>
				checkMessageEncoder(
					message,
					includeMessageEncoderDiver,
					includeMessageEncoderSurfaceAttendant,
					includeMessageEncoderAUV
				) ||
				checkMessageDecoder(
					message,
					includeMessageDecoderDiver,
					includeMessageDecoderSurfaceAttendant,
					includeMessageDecoderAUV
				) ||
				checkSpatialContext(message, includeSpatialContextColocated, includeSpatialContextRemote) ||
				checkTemporalContext(message, includeTemporalContextSync, includeTemporalContextAsync)
		);
	}
</script>
