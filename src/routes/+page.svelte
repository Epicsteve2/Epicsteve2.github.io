<script>
	import '../tailwind.css';
	import Header from './Header.svelte';
	// import backgroundPic from '$lib/images/background.jpg';
	import Footer from './Footer.svelte';
	import AboutMe from './AboutMe.svelte';
</script>

<div class="flex flex-col h-screen">
	<div class="mb-auto">
		<main>
			<Header />
			<AboutMe />
		</main>
	</div>
	<Footer />
</div>

<!-- can also do <style global> -->
<style>
	:global(body) {
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
		background-image: url(../lib/images/background.jpg);
	}
</style>
