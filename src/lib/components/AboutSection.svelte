<script lang="ts">
	export let sectionTitle: string;
	export let bottomBorder: boolean = true;

	let borderClass: string = bottomBorder ? 'border-b' : '';
</script>

<div class="py-4 px-2 rounded-t {borderClass}">
	<div class="pl-4 pr-4">
		<p class="pb-1 text-xl font-medium leading-8">{sectionTitle}</p>
		<slot />
	</div>
</div>
