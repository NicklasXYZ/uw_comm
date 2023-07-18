<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import MessageCardTwo from './messageCardTwo.svelte';
	import type { MessageShort, Message, GraphState } from '$lib/models/models.svelte';

	export let messageList: Message[];
	export let graphState: GraphState;

	const innerHeighMax: number = 625;
	const innerWidthMax: number = 768;

	let innerWidth: number = 0;
	let innerHeight: number = 0;
	let condition: boolean = true;

	let displayInfo: string | undefined = graphState.selectedNode;

	let messageObject: MessageShort = {
		id: 'None',
		message: '',
		messageEncoder: '',
		messageDecoder: '',
		spatialContext: '',
		temporalContext: '',
		type: ''
	};

	$: if (graphState.selectedNode) {
		displayInfo = graphState.selectedNode;
		for (let index = 0; index < messageList.length; index++) {
			const element = messageList[index];
			if (displayInfo == element.id) {
				messageObject = messageList[index];
			}
		}
	}
	$: condition = innerWidth > innerWidthMax && innerHeight > innerHeighMax;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if condition}
	<Accordion class="relative rounded-lg shadow bg-tertiary-500" padding="px-4 py-2">
		<AccordionItem open>
			<svelte:fragment slot="lead" />
			<svelte:fragment slot="summary">Message Overview</svelte:fragment>
			<svelte:fragment slot="content">
				<MessageCardTwo {messageObject} />
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
{/if}
