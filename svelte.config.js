// import { resolve } from 'path';
// import { vitePreprocess } from '@sveltejs/kit/vite';
// import preprocess from 'svelte-preprocess';
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	extensions: ['.svelte'],
// 	// Consult https://github.com/sveltejs/svelte-preprocess
// 	// for more information about preprocessors
// 	preprocess: preprocess({
// 		postcss: true
// 	}),

// 	kit: {
// 		// adapter: adapter({ out: 'build' }),
// 		alias: {
// 			$lib: './src/lib/',
// 		}
// 	}
// };

// export default config;

import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';

// const config = {
//   preprocess: [
//     preprocess({
//       postcss: true,
//     }),
//   ],
// };

export default {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
    // kit: {
        // adapter: adapter({
        //     // default options are shown. On some platforms
        //     // these options are set automatically — see below
        //     pages: 'build',
        //     assets: 'build',
        //     fallback: null,
        //     precompress: false,
        //     strict: true
        // })
    // }

    kit: {
        outDir: "docs",
        // paths: {"base": "/uw_comms"},
        adapter: adapter({
            fallback: 'index.html' // may differ from host to host
        }),
        alias: {
            $lib: './src/lib/',
		}
    }
};

// export default config;