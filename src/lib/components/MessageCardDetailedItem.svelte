<script lang="ts">
	import ItemList from '$lib/components/ItemList.svelte';

	export let itemTitle: string;
	export let itemContent: string | string[];
</script>

<tr>
	<div class="flex p-2">
		<div class="pl-4">
			<p class="text-xs text-surface-300">{itemTitle}</p>
			{#if Array.isArray(itemContent)}
				<ItemList items={itemContent} />
			{:else}
				<p class="text-sm font-medium">{itemContent}</p>
			{/if}
		</div>
	</div>
</tr>
