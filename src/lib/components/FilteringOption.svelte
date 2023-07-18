<script lang="ts">
	export let elementID: string;
	export let option: string;
	export let state: boolean;
	export let lastOption: boolean;

	const optionBorder: string = 'border-white sm:border-b-0 sm:border-r';
</script>

<li class="w-full {!lastOption ? optionBorder : ''}">
	<div class="flex items-center pl-3">
		<input
			id={elementID}
			type="checkbox"
			bind:checked={state}
			class="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"
		/>
		<label for={elementID} class="w-full py-3 ml-2 text-sm font-medium text-white">{option}</label>
	</div>
</li>
