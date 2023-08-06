<script lang="ts">
	/*
	 * Set the main (default) Skeleton user interface theme to use.
	 */
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	/*
	 * Load required stylesheet.
	 */
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	/*
	 * Import the AppBar and AppShell component.
	 */
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';

	/*
	 * Import the app's global stylesheet.
	 */
	import '../app.postcss';

	/*
	 * Set the filepath to the main logo to display in the AppBar.
	 */
	const logoLoc: string = '../assets/underwater.svg';

	/*
	 * Generate a string of the current date and time, which is to
	 * be placed on the AppBar together with the current app version.
	 */
	let todayDate: string = new Date().toISOString().slice(0, 10);
</script>

<!-- AppShell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar background="bg-surface-500">
			<svelte:fragment slot="lead">
				<a href="/">
					<div class="flex mx-2">
						<img class="mx-2" src={logoLoc} width="42" height="42" alt="Logo" />
						<div class="pl-4">
							<p class="h3">Underwater Communication</p>
							<p class="text-sm font-medium text-surface-300">v0.0.4 .::. {todayDate}</p>
						</div>
					</div>
				</a>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<a href="/about">
					<div class="flex mx-2">
						<p class="h3">About</p>
					</div>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<div class="max-w-6xl mx-auto">
		<slot />
	</div>
</AppShell>
