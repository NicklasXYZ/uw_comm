<script lang="ts">
	export let subSectionTitle: string;
	export let subSectionIconPath: string | undefined = undefined;
	export let iconAltText: string | undefined = undefined;
</script>

{#if subSectionIconPath && iconAltText}
	<p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
		<img class="mx-2" src={subSectionIconPath} width="28" height="28" alt={iconAltText} />
		{subSectionTitle}
	</p>
	<slot />
{:else}
	<p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
		{subSectionTitle}
	</p>
	<slot />
{/if}
