<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	import { filter } from '@skeletonlabs/skeleton';
	import MessageCardHorizontal from './messageCardHorizontal.svelte';
	export let filteredMessages;
	export let state;

	let displayInfo = state.clickedNode;
	let cardData = undefined;

	$: if (displayInfo) {
		if (state.clickedNode) {
			displayInfo = state.clickedNode;
			for (let index = 0; index < filteredMessages.length; index++) {
				const element = filteredMessages[index];
				if (displayInfo == element.id) {
					cardData = filteredMessages[index];
				}
			}
		} else {
			displayInfo = '';
			cardData = undefined;
		}
	}


  
	let innerWidth = 0;
	let innerHeight = 0;

	$: condition = innerWidth > 768;
	// $: condition = true;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<!-- <p>Inner Width: {innerWidth}</p>
<p>Inner Height: {innerHeight}</p>
<p>condition: {condition}</p> -->

<!-- <img src="https://svelte.dev/svelte-logo-horizontal.svg" alt=""
         class="image-basic"
         class:image-conditional={condition}
         /> -->

<!-- <p>Hello World!</p> -->

{#if condition}
	<!-- <div bind:this={infoRefElement}> -->
	<!-- <div style="position: relative; left: 0px; top: 0; z-index: 1;"> -->
	<div
		class="px-4 flex flex-col"
		style="position: absolute; bottom: 0; right: 0; z-index: 1; width: 316px"
	>
		<!-- <div style="position: absolute; left: 0; top: 0; z-index: 1;"> -->
		<!-- <h2> -->
		<!-- {title}{" "} -->
		<!-- <button type="button" onClick={() => setIsDeployed((v) => !v)}> -->
		<!-- <button type="button"> -->
		<!-- {displayInfo} -->
		<!-- {isDeployed ? <MdExpandLess /> : <MdExpandMore />} -->
		<!-- </button> -->
		<!-- Display this info: {displayInfo} -->
		<!-- </h2> -->
		<!-- <AnimateHeight duration={DURATION} height={isDeployed ? "auto" : 0}> -->
		<!-- {children} -->
		<!-- </AnimateHeight> -->
		<!-- class="relative rounded-lg shadow bg-surface-100-800-token" -->
		<!-- <Accordion
  class="relative rounded-lg shadow bg-surface-500"
  hover="hover:bg-surface-600"
  padding="px-4 py-2"
  > -->

		<Accordion
			class="relative rounded-lg shadow bg-tertiary-500"
			hover="hover:bg-tertiary-600"
			padding="px-4 py-2"
		>
			<AccordionItem open>
				<svelte:fragment slot="lead"></svelte:fragment>
				<svelte:fragment slot="summary">Message Overview</svelte:fragment>
				<svelte:fragment slot="content">
					{#if cardData}
						<MessageCardHorizontal messageObject={cardData} />
					{/if}
				</svelte:fragment>
			</AccordionItem>
			<!-- ... -->
		</Accordion>
	</div>
{/if}



<style>
	.image-basic {
		width: 100vw;
	}
	.image-conditional {
		width: 50vw;
	}
</style>
