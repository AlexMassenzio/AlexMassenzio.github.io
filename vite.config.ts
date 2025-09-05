import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { threlteStudio } from '@threlte/studio/vite';

export default defineConfig({
	plugins: [threlteStudio(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
