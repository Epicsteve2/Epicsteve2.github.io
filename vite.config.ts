import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	build: {
		// So git worktree would work with
		emptyOutDir: false,
	}
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	]
});
