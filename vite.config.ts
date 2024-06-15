import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { withZephyr } from 'vite-plugin-zephyr';
export default defineConfig({
	plugins: [sveltekit()]
});
