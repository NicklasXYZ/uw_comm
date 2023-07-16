<script lang="ts" context="module">
	export const COLOR_BG_SURFACE_600: string = '#495a8fff';
	export const COLOR_TERTIARY_500: string = '#16a8eaff';

    /**
     * Describe the object that is used to organize the various 
     * pre-defined message categories.
     */
	export interface MessageCategories {
		id?: string;
		name?: string;
		abbreviation?: string;
	}
    
    /**
     * TODO: Eventually move this data to the 'data.json' file 
     * which is fetched from github.
     */
	export let messageCategories: MessageCategories[] = [
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
