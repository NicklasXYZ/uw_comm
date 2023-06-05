<script lang="ts">
	import MessageVariationList from '$lib/components/MessageVariationList.svelte';
	import CategoryList from '$lib/components/CategoryList.svelte';
	import type { Message } from '$lib/models/message';
	export let messageObject: Message;
	export let message_variations = messageObject.message_variations
	export let categories = messageObject.categories

    const messageLoc = '../assets/message.svg';
	const outgoingMailLoc = '../assets/outgoing_mail.svg';
	const incomingMailLoc = '../assets/incoming_mail.svg';
	const mapLoc = '../assets/map.svg';
	const timeLoc = '../assets/time.svg';
	const typeLoc = '../assets/type.svg';
	const infoLoc = '../assets/info.svg';
	const categoryLoc = '../assets/categories.svg';
</script>

<div class="flex flex-col p-4 space-y-4">
	<div class="relative w-full max-h-full">
        <div class="relative rounded-lg shadow bg-surface-500">
			<div class="flex py-4 px-2 border-b rounded-t">
                <!-- <img class="mx-2" src={messageLoc} width="24" height="24" alt="Message" /> -->
                <div class="pl-4">
                    <p class="text-xs text-surface-300">Message</p>
                    <p class="text-sm font-medium">"{messageObject.message}"</p>
                </div>
            </div>
			
			<table class="my-2 text-xs">
				<tbody>
					<tr>
						<div class="flex p-2">
							<!-- <img class="mx-2" src={infoLoc} width="24" height="24" alt="Message" /> -->
							<div class="pl-4">
								<p class="text-xs text-surface-300">Message Variations</p>
								<!-- <p class="text-sm font-medium"> -->
									<MessageVariationList {message_variations}/>
								<!-- </p> -->
							</div>
						</div>
					</tr>

					<tr>
						<div class="flex p-2">
							<!-- <img class="mx-2" src={infoLoc} width="24" height="24" alt="Message" /> -->
							<div class="pl-4">
								<p class="text-xs text-surface-300">Description</p>
								<p class="text-sm font-medium">{messageObject.description}</p>
							</div>
						</div>
					</tr>

					<tr>
						<div class="flex p-2">
							<!-- <img class="mx-2" src={infoLoc} width="24" height="24" alt="Message" /> -->
							<div class="pl-4">
								<p class="text-xs text-surface-300">Meaning</p>
								<p class="text-sm font-medium">{messageObject.meaning}</p>
							</div>
						</div>
					</tr>

					<tr>
						<div class="flex p-2">
							<!-- <img class="mx-2" src={outgoingMailLoc} width="24" height="24" alt="Message" /> -->
							<div class="pl-4">
								<p class="text-xs text-surface-300">Message Decoder</p>
								<p class="text-sm font-medium">{messageObject.message_decoder}</p>
							</div>
						</div>
					</tr>

					<tr>
						<div class="flex p-2">
							<!-- <img class="mx-2" src={incomingMailLoc} width="24" height="24" alt="Message" /> -->
							<div class="pl-4">
								<p class="text-xs text-surface-300">Message Encoder</p>
								<p class="text-sm font-medium">{messageObject.message_encoder}</p>
							</div>
						</div>
					</tr>

					<tr>
						<div class="flex p-2">
							<!-- <img class="mx-2" src={mapLoc} width="24" height="24" alt="Message" /> -->
							<div class="pl-4">
								<p class="text-xs text-surface-300">Spatial Context</p>
								<p class="text-sm font-medium">{messageObject.spatial_context}</p>
							</div>
						</div>
					</tr>

					<tr>
						<div class="flex p-2">
							<!-- <img class="mx-2" src={timeLoc} width="24" height="24" alt="Message" /> -->
							<div class="pl-4">
								<p class="text-xs text-surface-300">Temporal Context</p>
								<p class="text-sm font-medium">{messageObject.temporal_context}</p>
							</div>
						</div>
					</tr>

					<tr>
						<div class="flex p-2">
							<!-- <img class="mx-2" src={typeLoc} width="24" height="24" alt="Message" /> -->
							<div class="pl-4">
								<p class="text-xs text-surface-300">Communication Type</p>
								<p class="text-sm font-medium">{messageObject.type}</p>
							</div>
						</div>
					</tr>

					<tr>
						<div class="flex p-2">
							<!-- <img class="mx-2" src={categoryLoc} width="24" height="24" alt="Message" /> -->
							<div class="pl-4">
								<p class="text-xs text-surface-300">Categorization</p>
								<!-- <p class="text-sm font-medium"> -->
									<CategoryList {categories}/>
								<!-- </p> -->

							</div>
						</div>
					</tr>
				</tbody>
			</table>

			<!--button to return to grid-->
			<div class="text-center">
				<a href="/">
					<button onclick="self.close()" class="py-1 px-2 text-white bg-surface-300 rounded-lg w-full/2 focus:outline-none">
						Close window
					</button>
				</a>			
			</div>

			<!-- Bottom Vertical Space -->
			<div class="flex flex-col p-2 space-y-2"></div>

		</div>
	</div>
</div>