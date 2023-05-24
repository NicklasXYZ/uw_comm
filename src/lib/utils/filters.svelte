<script lang="ts" context="module">
	import type { Message } from '$lib/models/message';

	function checkSpatialContext(message: Message, includeSpatialContextColocated: boolean, includeSpatialContextRemote: boolean): boolean {
		return (includeSpatialContextColocated == true && message.spatial_context.trim().toLowerCase() == "colocated") ||
		(includeSpatialContextRemote == true && message.spatial_context.trim().toLowerCase() == "remote")
	}

	function checkTemporalContext(message: Message, includeTemporalContextSync: boolean, includeTemporalContextAsync: boolean): boolean {
		return (includeTemporalContextSync == true && message.temporal_context.trim().toLowerCase() == "synchronous") ||
		(includeTemporalContextAsync == true && message.temporal_context.trim().toLowerCase() == "asynchronous")
	}

	export function filterDimensions(
		messages: Message[], 
		includeSpatialContextColocated: boolean,
		includeSpatialContextRemote: boolean,
		includeTemporalContextSync: boolean,
		includeTemporalContextAsync: boolean,
	) {
		return messages.filter(
			(message: Message): boolean => checkSpatialContext(message, includeSpatialContextColocated, includeSpatialContextRemote) ||
			checkTemporalContext(message, includeTemporalContextSync, includeTemporalContextAsync)
		);
	}
</script>