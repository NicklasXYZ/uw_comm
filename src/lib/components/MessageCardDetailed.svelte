<script lang="ts">
	import MessageCardDetailedItem from './MessageCardDetailedItem.svelte';
	import type { Message } from '$lib/models/models.svelte';

	export let messageObject: Message;

	const messageLoc = '../assets/message.svg';
	const outgoingMailLoc = '../assets/outgoing_mail.svg';
	const incomingMailLoc = '../assets/incoming_mail.svg';
	const mapLoc = '../assets/map.svg';
	const timeLoc = '../assets/time.svg';
	const typeLoc = '../assets/type.svg';
	const infoLoc = '../assets/info.svg';
	const categoryLoc = '../assets/categories.svg';
</script>

<div class="flex py-4 px-2 border-b rounded-t">
	<div class="pl-4">
		<p class="text-xs text-surface-300">Message</p>
		<p class="text-sm font-medium">"{messageObject.message}"</p>
	</div>
</div>

<table class="my-2 text-xs">
	<tbody>
		<MessageCardDetailedItem
			itemTitle={'Message Variations'}
			itemContent={messageObject.messageVariations}
		/>
		<MessageCardDetailedItem itemTitle={'Description'} itemContent={messageObject.description} />
		<MessageCardDetailedItem itemTitle={'Meaning'} itemContent={messageObject.meaning} />
		<MessageCardDetailedItem
			itemTitle={'Message Decoder'}
			itemContent={messageObject.messageDecoder}
		/>
		<MessageCardDetailedItem
			itemTitle={'Message Encoder'}
			itemContent={messageObject.messageEncoder}
		/>
		<MessageCardDetailedItem
			itemTitle={'Spatial Context'}
			itemContent={messageObject.spatialContext}
		/>
		<MessageCardDetailedItem
			itemTitle={'Temporal Context'}
			itemContent={messageObject.temporalContext}
		/>
		<MessageCardDetailedItem itemTitle={'Communication Type'} itemContent={messageObject.type} />
		<MessageCardDetailedItem itemTitle={'Categorization'} itemContent={messageObject.categories} />
	</tbody>
</table>
