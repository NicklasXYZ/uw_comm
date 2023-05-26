<script lang="ts">
	import type { MessageShort } from '$lib/models/message';
	export let messageObject: MessageShort;

    const messageLoc = '../assets/message.svg';
	const outgoingMailLoc = '../assets/outgoing_mail.svg';
	const incomingMailLoc = '../assets/incoming_mail.svg';
	const mapLoc = '../assets/map.svg';
	const timeLoc = '../assets/time.svg';
	const typeLoc = '../assets/type.svg';
</script>

<a href={`/message/${messageObject.id}`} target="_blank">
    <!-- <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative rounded-lg shadow bg-surface-500 hover:bg-surface-600"> -->
    <div class="w-full max-w-2xl max-h-full">
        <div class="rounded-lg shadow bg-surface-500 hover:bg-surface-600">
                    
            <!-- <div class="flex py-4 px-6 border-b rounded-t"> -->
            <!-- <div class="flex py-4 px-6 border-b rounded-t">
                    <img class="mx-0" src={messageLoc} width="24" height="24" alt="Message" />
                <div class="pl-4">
                    <p class="text-xs text-surface-300">Message</p>
                    <p class="text-sm font-medium ">"{messageObject.message}"</p>
                </div>
            </div> -->

            <div class="flex py-4 px-6 border-b rounded-t">
                <img class="mx-0" src={messageLoc} width="24" height="24" alt="Message" />
                <div class="pl-4 overflow-hidden">
                    <p class="text-xs text-surface-300">Message</p>
                    <p class="text-sm font-medium truncate">"{messageObject.message}"</p>
                </div>
            </div>

            <!-- <div class="flex p-2">
                <img class="mx-2" src={outgoingMailLoc} width="24" height="24" alt="Message" />
                <div class="pl-4">
                    <p class="text-xs text-surface-300">Message Encoder</p>
                    <p class="text-sm font-medium">{messageObject.message_encoder}</p>
                </div>
            </div> -->

            <!-- <div class="flex p-2">
                <img class="mx-2" src={incomingMailLoc} width="24" height="24" alt="Message" />
                <div class="pl-4">
                    <p class="text-xs text-surface-300">Message Decoder</p>
                    <p class="text-sm font-medium">{messageObject.message_decoder}</p>
                </div>
            </div> -->

            <div class="flex p-2 pt-4">
                <!-- <img class="mx-2" src={mapLoc} width="24" height="24" alt="Message" /> -->
                <div class="pl-4">
                    <p class="text-xs text-surface-300">Spatial Context</p>
                    <p class="text-sm font-medium">{messageObject.spatial_context}</p>
                </div>
            </div>

            <div class="flex p-2">
                <!-- <img class="mx-2" src={timeLoc} width="24" height="24" alt="Message" /> -->
                <div class="pl-4">
                    <p class="text-xs text-surface-300">Temporal Context</p>
                    <p class="text-sm font-medium">{messageObject.temporal_context}</p>
                </div>
            </div>

            <div class="flex p-2 pb-4">
                <!-- <img class="mx-2" src={typeLoc} width="24" height="24" alt="Message" /> -->
                <div class="pl-4">
                    <p class="text-xs text-surface-300">Comm. Method</p>
                    <p class="text-sm font-medium">{messageObject.type}</p>
                </div>
            </div>
        </div>
    </div>
</a>