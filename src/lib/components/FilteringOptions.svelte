<script lang="ts">
	import FilteringOption from '$lib/components/FilteringOption.svelte';
	import type { FilteringState } from '$lib/models/models.svelte';

	export let filteringState: FilteringState;
    
    // Set common styling of list of options
    const listStyling: string = "text-surface-300 rounded-lg sm:flex bg-surface-500"
</script>

<div class="flex flex-col p-4 space-y-4">
	<h1>Message Encoder</h1>
	<ul class={listStyling}>
		<FilteringOption
			elementID={'checkbox-list-1'}
			option={'Diver'}
			bind:state={filteringState.messageEncoderDiver}
			lastOption={false}
		/>
		<FilteringOption
			elementID={'checkbox-list-2'}
			option={'Surface Attendant'}
			bind:state={filteringState.messageEncoderSurfaceAttendant}
			lastOption={false}
		/>
		<FilteringOption
			elementID={'checkbox-list-3'}
			option={'AUV'}
			bind:state={filteringState.messageEncoderAUV}
			lastOption={true}
		/>
	</ul>

    <h1>Message Decoder</h1>
	<ul class={listStyling}>
		<FilteringOption
			elementID={'checkbox-list-1'}
			option={'Diver'}
			bind:state={filteringState.messageDecoderDiver}
			lastOption={false}
		/>
		<FilteringOption
			elementID={'checkbox-list-2'}
			option={'Surface Attendant'}
			bind:state={filteringState.messageDecoderSurfaceAttendant}
			lastOption={false}
		/>
		<FilteringOption
			elementID={'checkbox-list-3'}
			option={'AUV'}
			bind:state={filteringState.messageDecoderAUV}
			lastOption={true}
		/>
	</ul>

    <h1>Spatial Context</h1>
	<ul class={listStyling}>
		<FilteringOption
			elementID={'checkbox-list-5'}
			option={'Colocated'}
			bind:state={filteringState.spatialContextColocated}
			lastOption={false}
		/>
		<FilteringOption
			elementID={'checkbox-list-6'}
			option={'Remote'}
			bind:state={filteringState.spatialContextRemote}
			lastOption={true}
		/>
	</ul>

	<h1>Temporal Context</h1>
	<ul class={listStyling}>
		<FilteringOption
			elementID={'checkbox-list-7'}
			option={'Synchronous'}
			bind:state={filteringState.temporalContextSync}
			lastOption={false}
		/>
		<FilteringOption
			elementID={'checkbox-list-8'}
			option={'Asynchronous'}
			bind:state={filteringState.temporalContextAsync}
			lastOption={true}
		/>
	</ul>
</div>
