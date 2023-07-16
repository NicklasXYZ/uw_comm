<script lang="ts">
	// import type { MessageShort } from '$lib/models/message';
	// export let messageObject: MessageShort;

	const messageLoc = '../assets/message.svg';
	const outgoingMailLoc = '../assets/outgoing_mail.svg';
	const incomingMailLoc = '../assets/incoming_mail.svg';
	const mapLoc = '../assets/map.svg';
	const timeLoc = '../assets/time.svg';
	const typeLoc = '../assets/type.svg';

	export let message;
	export let messageEncoder;
	export let messageDecoder;
	export let spatialContext;
	export let temporalContext;
	export let type;

	// $: if (messageObject) {
	// 	message = messageObject.message;
	// 	messageEncoder = messageObject.message_encoder;
	// 	messageDecoder = messageObject.message_decoder;
	// 	spatialContext = messageObject.spatial_context;
	// 	temporalContext = messageObject.temporal_context;
	// 	type = messageObject.type;
	// }
</script>

<!-- <a href={`/message/${messageObject.id}`} target="_blank"> -->
		<div class="flex py-2 px-6 border-b rounded-t">
			<!-- <div class="flex py-4 px-6 border-b rounded-t"> -->
			<img class="mx-0" src={messageLoc} width="24" height="24" alt="Message" />
			<div class="pl-4 overflow-hidden">
                <p class="text-xs text-surface-300">Message</p>
                {#if message}
                    <p class="text-sm font-medium truncate">{message}</p>
                {:else}
                    <p class="text-sm font-large truncate">-</p>
    				<!-- <p class="text-sm font-medium truncate">-</p> -->
                {/if}
			</div>
		</div>

		<div class="flex p-1 pt-2">
			<!-- <img class="mx-2" src={outgoingMailLoc} width="24" height="24" alt="Message" /> -->
			<div class="pl-4">
                <p class="text-xs text-surface-300">Message Encoder</p>
                {#if messageEncoder}
                    <p class="text-sm font-medium">{messageEncoder}</p>
                {:else}
                    <p class="text-sm font-large truncate">-</p>
                <!-- <p class="text-sm font-medium">-</p> -->
                {/if}
			</div>
		</div>

		<div class="flex p-1">
			<!-- <img class="mx-2" src={incomingMailLoc} width="24" height="24" alt="Message" /> -->
			<div class="pl-4">
				<p class="text-xs text-surface-300">Message Decoder</p>
                {#if messageDecoder}
				    <p class="text-sm font-medium">{messageDecoder}</p>
                {:else}
                <p class="text-sm font-large truncate">-</p>
                <!-- <p class="text-sm font-medium">-</p> -->
                {/if}
			</div>
		</div>

		<div class="flex p-1">
			<!-- <img class="mx-2" src={mapLoc} width="24" height="24" alt="Message" /> -->
			<div class="pl-4">
				<p class="text-xs text-surface-300">Spatial Context</p>
                {#if spatialContext}
    				<p class="text-sm font-medium">{spatialContext}</p>
                {:else}
                <p class="text-sm font-large truncate">-</p>
                <!-- <p class="text-sm font-medium">-</p> -->
                {/if}
			</div>
		</div>

		<div class="flex p-1">
			<!-- <img class="mx-2" src={timeLoc} width="24" height="24" alt="Message" /> -->
			<div class="pl-4">
				<p class="text-xs text-surface-300">Temporal Context</p>
                {#if temporalContext}
                    <p class="text-sm font-medium">{temporalContext}</p>
                {:else}
                <p class="text-sm font-large truncate">-</p>
                <!-- <p class="text-sm font-medium">-</p> -->
                {/if}
			</div>
		</div>

		<div class="flex p-1 pb-2">
			<!-- <img class="mx-2" src={typeLoc} width="24" height="24" alt="Message" /> -->
			<div class="pl-4">
				<p class="text-xs text-surface-300">Comm. Method</p>
                {#if type}
				    <p class="text-sm font-medium">{type}</p>
                {:else}
                    <p class="text-sm font-large truncate">-</p>
                {/if}

            </div>
		</div>
	<!-- </div> -->
<!-- </a> -->
