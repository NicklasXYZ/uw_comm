<script lang="ts">
	import type { MessageShort } from '$lib/models/message';
	import MessageCardHorizontalEntry from '$lib/components/MessageCardHorizontalEntry.svelte';
	export let messageObject: MessageShort;

	const messageLoc = '../assets/message.svg';
	const outgoingMailLoc = '../assets/outgoing_mail.svg';
	const incomingMailLoc = '../assets/incoming_mail.svg';
	const mapLoc = '../assets/map.svg';
	const timeLoc = '../assets/time.svg';
	const typeLoc = '../assets/type.svg';

	let message = '';
	let messageEncoder = '';
	let messageDecoder = '';
	let spatialContext = '';
	let temporalContext = '';
	let type = '';

	$: if (messageObject) {
		message = messageObject.message;
		messageEncoder = messageObject.message_encoder;
		messageDecoder = messageObject.message_decoder;
		spatialContext = messageObject.spatial_context;
		temporalContext = messageObject.temporal_context;
		type = messageObject.type;
	}
</script>

{#if message}
<!-- Card with hyperlink -->
<a href={`/message/${messageObject.id}`} target="_blank">
	<!-- Card with hover effect -->
	<div class="rounded-lg shadow bg-surface-500 hover:bg-surface-600">
		<MessageCardHorizontalEntry {message} {messageEncoder} {messageDecoder} {spatialContext} {temporalContext} {type}/>
	</div>

	</a>
{:else}
<!-- Card without hyperlink and hover effect -->
	<div class="rounded-lg shadow bg-surface-500">
		<MessageCardHorizontalEntry {message} {messageEncoder} {messageDecoder} {spatialContext} {temporalContext} {type}/>
	</div>
{/if}

