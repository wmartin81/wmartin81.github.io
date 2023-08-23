import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(
			{
				// default options are shown. On some platforms
				// these options are set automatically — see below
				pages: 'docs',
				assets: 'docs',
				fallback: 'index.html',
				precompress: false,
				strict: true
			}
		),
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		}
	}
};

export default config;
