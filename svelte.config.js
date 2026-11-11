import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'], 

	preprocess: mdsvex({
		extensions: ['.svx']
	}),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		// sitemap.xml is not linked from a page: name it so it is written too.
		prerender: {
			entries: ['*', '/sitemap.xml', ...['en', 'fr'].flatMap((l) => ['community', 'learn', 'api', 'further', 'about'].map((s) => '/' + l + '/' + s))]
		},
		// The site is served at the root of arvest.app (CNAME on gh-pages). Paths are absolute:
		// with relative paths, the layout (top bar, footer) kept the addresses of the first page
		// opened, and its images broke after moving to a page at another depth.
		paths: {
			base: '',
			relative: false
		}
	}
};

export default config;
