<script lang="ts">
	export let categories: string[]; 
</script>

<ul class="text-sm font-medium list-inside list-disc">
	{#each categories as category}
		<li>
			{category}
		</li>
	{/each}
</ul>