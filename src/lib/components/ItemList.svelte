<script lang="ts">
	export let items: string[];
</script>

<ul class="text-sm font-medium list-inside list-disc">
	{#each items as item}
		<li>
			{item}
		</li>
	{/each}
</ul>
