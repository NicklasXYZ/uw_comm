<script lang="ts">
	import MessageCardTwoItem from "./messageCardTwoItem.svelte";
	import type { MessageShort } from '$lib/models/models.svelte';
	export let messageObject: MessageShort;

	const messageLoc: string = '../assets/message.svg';
</script>

<div class="flex py-2 px-6 border-b rounded-t">
	<img class="mx-0" src={messageLoc} width="24" height="24" alt="Message" />
	<MessageCardTwoItem itemTitle={"Message"} itemEntry={messageObject.message} />
</div>

<div class="flex p-1 pt-2">
	<MessageCardTwoItem itemTitle={"Message Encoder"} itemEntry={messageObject.messageEncoder} />
</div>

<div class="flex p-1">
	<MessageCardTwoItem itemTitle={"Message Decoder"} itemEntry={messageObject.messageDecoder} />
</div>

<div class="flex p-1">
	<MessageCardTwoItem itemTitle={"Spatial Context"} itemEntry={messageObject.spatialContext} />
</div>

<div class="flex p-1">
	<MessageCardTwoItem itemTitle={"Temporal Context"} itemEntry={messageObject.temporalContext} />
</div>

<div class="flex p-1 pb-2">
	<MessageCardTwoItem itemTitle={"Comm. Method"} itemEntry={messageObject.type} />
</div>
