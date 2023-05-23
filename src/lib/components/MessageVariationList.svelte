<script lang="ts">
	export let message_variations: string[]; 
</script>

<ul class="text-sm font-medium list-inside list-disc">
	{#each message_variations as message_variation}
		<li>
			"{message_variation}"
		</li>
	{/each}
</ul>