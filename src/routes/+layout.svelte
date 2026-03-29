<script lang="ts">
	import '../tailwind.css';
	import Footer from './Footer.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex h-screen flex-col">
	<div class="mb-auto">
		{@render children()}
	</div>
	<Footer />
</div>

<style>
	:global(body) {
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
		background-image: url(../lib/images/background.jpg);
	}
</style>
