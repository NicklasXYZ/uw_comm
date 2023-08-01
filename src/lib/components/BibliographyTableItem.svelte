<script lang="ts">
	export let refName: string;
	export let author: string;
	export let year: string;
	export let title: string;
	export let journal: string | undefined = undefined;
	export let volume: string | undefined = undefined;
	export let issue: string | undefined = undefined;
	export let pageNumbers: string | undefined = undefined;
	export let doi: string | undefined = undefined;
	export let publisher: string | undefined = undefined;
	export let note: string | undefined = undefined;
</script>

<tr>
	<td>[{refName}]</td>
	<td class="pl-4">
		<!-- Build the citation string depending on available information -->
		<p>
			{author}. ({year}). {title}.
			{#if journal}
				{journal},
			{/if}
			{#if journal && volume}
				{journal}, {volume},
			{/if}
			{#if journal && volume && issue}
				{journal}, {volume}({issue}),
			{/if}
			{#if pageNumbers} {pageNumbers}. {/if}
			{#if publisher} {publisher}. {/if}
			{#if note} Note: {note}. {/if}
			{#if doi} <a class="hover:underline" href="https://doi.org/{doi}">DOI: {doi}</a>. {/if}
		</p>
	</td>
</tr>
