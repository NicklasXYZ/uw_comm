import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://uwcomm.infonest.xyz',
	integrations: [
		starlight({
			title: 'Underwater Communication',
			description:
				'A catalogue of documented underwater and surface communication messages for recreational and professional diving.',
			favicon: '/favicon.png',
			logo: {
				src: './public/assets/underwater.svg',
				alt: 'Underwater Communication'
			},
			pagefind: false,
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 2
			},
			customCss: ['./src/styles/global.css'],
			components: {
				Footer: './src/components/Footer.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro'
			},
			sidebar: [
				{ label: 'Catalogue', link: '/' },
				{ label: 'About', link: '/about/' },
				{ label: 'Source Data', link: '/source-data/' }
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/NicklasXYZ/uw_comms'
				}
			]
		})
	]
});
