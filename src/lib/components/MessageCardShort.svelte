<script lang="ts">
	import MessageCardShortItem from './MessageCardShortItem.svelte';
	import type { MessageShort } from '$lib/models/models.svelte';
	export let messageObject: MessageShort;

	export let itemPadding: number = 1;
	export let itemTopPadding: number = 2;
	export let itemBottomPadding: number = 2;

	const messageLoc: string = '../assets/message.svg';
</script>

<div class="flex py-2 px-6 border-b rounded-t">
	<img class="mx-0" src={messageLoc} width="24" height="24" alt="Message" />
	<MessageCardShortItem itemTitle={'Message'} itemEntry={messageObject.message} />
</div>

<div class="flex p-{itemPadding} pt-{itemTopPadding}">
	<MessageCardShortItem itemTitle={'Message Encoder'} itemEntry={messageObject.messageEncoder} />
</div>

<div class="flex p-{itemPadding}">
	<MessageCardShortItem itemTitle={'Message Decoder'} itemEntry={messageObject.messageDecoder} />
</div>

<div class="flex p-{itemPadding}">
	<MessageCardShortItem itemTitle={'Spatial Context'} itemEntry={messageObject.spatialContext} />
</div>

<div class="flex p-{itemPadding}">
	<MessageCardShortItem itemTitle={'Temporal Context'} itemEntry={messageObject.temporalContext} />
</div>

<div class="flex p-{itemPadding} pb-{itemBottomPadding}">
	<MessageCardShortItem itemTitle={'Comm. Method'} itemEntry={messageObject.type} />
</div>
