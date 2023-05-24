<script lang="ts">
	// Your selected Skeleton theme:
	// import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	// NOTE: this will be renamed skeleton.css in the v2.x release.
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	const globeLoc = '../assets/underwater.svg';

	var todayDate = new Date().toISOString().slice(0, 10);
</script>

<!-- AppShell -->
<AppShell>
	<svelte:fragment slot="header">
			
		<AppBar background="bg-surface-500"> 
			<svelte:fragment slot="lead">
				<a href="/">
					<div class="flex mx-2">
						<img class="mx-2" src={globeLoc} width="42" height="42" alt="Globe" />
						<div class="pl-4">
							<p class="h3">Underwater Communication</p>
							<p class="text-sm font-medium text-surface-300">v0.0.1 .::. {todayDate}</p>
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