<script lang="ts">
	export let itemTitle: string;
	export let itemEntry: string;
</script>

<div class="pl-4 overflow-hidden">
	<p class="text-xs text-surface-300">{itemTitle}</p>
	{#if itemEntry}
		<p class="text-sm font-medium truncate">{itemEntry}</p>
	{:else}
		<p class="text-sm font-large truncate">-</p>
	{/if}
</div>
