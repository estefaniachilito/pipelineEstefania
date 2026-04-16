import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const repoBase = '/pipelineEstefania';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html'
		}),
		paths: {
			base: dev ? '' : repoBase
		},
		prerender: {
			entries: ['/']
		}
	}
};

export default config;
