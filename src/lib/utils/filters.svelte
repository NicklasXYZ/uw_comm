<script lang="ts" context="module">
	import type { Message } from '$lib/models/models.svelte';

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
		includeSpatialContextColocated: boolean,
		includeSpatialContextRemote: boolean,
		includeTemporalContextSync: boolean,
		includeTemporalContextAsync: boolean
	) {
		return messages.filter(
			(message: Message): boolean =>
				checkSpatialContext(message, includeSpatialContextColocated, includeSpatialContextRemote) ||
				checkTemporalContext(message, includeTemporalContextSync, includeTemporalContextAsync)
		);
	}
</script>
