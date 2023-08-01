<script lang="ts" context="module">
	import type { MessageCategory } from '$lib/models/models.svelte';

	export const COLOR_BG_SURFACE_600: string = '#495a8fff';
	export const COLOR_BG_SURFACE_100_800_TOKEN: string = '#425181ff';
	export const COLOR_TERTIARY_500: string = '#16a8eaff';
	export const COLOR_ERROR_500: string = '#d41976ff';

	/**
	 * About page APA citation format.
	 */
	export const citationAPA: string = [
		'Andersen, N. S. (2023).',
		' Underwater Communication.',
		' URL: https://uwcomm.infonest.xyz/.',
		' DOI: https://doi.org/10.5281/zenodo.7966369',
		'.'
	]
		.map((line) => line + '')
		.join('');

	/**
	 * About page bibtex citation format.
	 */
	export const citationBibtex: string = [
		'@misc{uwcomm2023,',
		'   title        = {Underwater Communication},',
		'   author       = {Andersen, N. S.},',
		'   year         = {2023},',
		'   howpublished = {URL:~\\url{https://uwcomm.infonest.xyz/}. DOI:~\\url{https://doi.org/10.5281/zenodo.7966369}},',
		'}'
	]
		.map((line) => line + '\n')
		.join('');

	/**
	 * TODO: Eventually move this data to the 'data.json' file which is fetched
	 * from github.
	 */
	export const messageCategories: MessageCategory[] = [
		{
			id: 'cat0',
			name: 'Emotions & Expressions',
			abbreviation: 'EE'
		},
		{
			id: 'cat1',
			name: 'Environmental Conditions',
			abbreviation: 'EC'
		},
		{
			id: 'cat2',
			name: 'Navigation & Positioning',
			abbreviation: 'NP'
		},
		{
			id: 'cat3',
			name: 'Safety & Emergency',
			abbreviation: 'SE'
		},
		{
			id: 'cat4',
			name: 'Wildlife Sightings',
			abbreviation: 'WS'
		},
		{
			id: 'cat5',
			name: 'Quantitative Information',
			abbreviation: 'QI'
		}
	];
</script>
