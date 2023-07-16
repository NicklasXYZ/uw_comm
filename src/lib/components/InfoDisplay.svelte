<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import MessageCardHorizontal from './messageCardHorizontal.svelte';
	export let filteredMessages;
	export let state;

	const innerHeighMax: number = 625;
	const innerWidthMax: number = 768;

	let innerWidth: number = 0;
	let innerHeight: number = 0;
	let condition: boolean = true;

	let displayInfo = state.clickedNode;
	// let cardData = undefined;

	let cardData = {
		id: 'None',
		message: '',
		message_encoder: '',
		message_decoder: '',
		spatial_context: '',
		temporal_context: '',
		type: ''
	};

	$: if (state.clickedNode) {
		displayInfo = state.clickedNode;
		for (let index = 0; index < filteredMessages.length; index++) {
			const element = filteredMessages[index];
			if (displayInfo == element.id) {
				cardData = filteredMessages[index];
			}
		}
	}
	$: condition = innerWidth > innerWidthMax && innerHeight > innerHeighMax;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if condition}
	<Accordion
		class="relative rounded-lg shadow bg-tertiary-500"
		padding="px-4 py-2"
		>
		<!-- hover="hover:bg-tertiary-600" -->
		<AccordionItem open>
			<svelte:fragment slot="lead" />
			<svelte:fragment slot="summary">Message Overview</svelte:fragment>
			<svelte:fragment slot="content">
				<MessageCardHorizontal messageObject={cardData} />
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
{/if}
