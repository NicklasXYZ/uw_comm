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
			customCss: ['./src/styles/global.css'],
			sidebar: [
				{ label: 'Catalogue', link: '/' },
				{ label: 'About', link: '/about/' },
				{ slug: 'source-data' }
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
