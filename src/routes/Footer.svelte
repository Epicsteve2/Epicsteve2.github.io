<script lang="ts">
	import GithubLogo from 'virtual:icons/bi/github';
	import LinkedInLogo from 'virtual:icons/bi/linkedin';
	import EnvelopeLogo from 'virtual:icons/bi/envelope-fill';
	import FileTextLogo from 'virtual:icons/bi/file-earmark-text-fill';
</script>

<footer class="flex flex-col items-center bg-gray-600 py-6">
	<h2 class="pb-2 text-center text-4xl text-white">Contact me!</h2>
	<div class="mx-2 flex max-w-full flex-row flex-wrap justify-center">
		<a href="https://github.com/Epicsteve2" target="_blank">
			<GithubLogo class="pr-1" />
			GitHub
		</a>
		<a href="https://www.linkedin.com/in/stephen-guo-399959192/" target="_blank">
			<LinkedInLogo class="pr-1" />
			LinkedIn
		</a>
		<a href="mailto:stephenguo14@gmail.com" target="_blank">
			<EnvelopeLogo class="pr-1" />
			Email
		</a>
		<a
			href="https://github.com/Epicsteve2/LaTeX-Files/raw/main/pdf/stephen-guo-resume.pdf"
			target="_blank"
		>
			<FileTextLogo class="pr-1" />
			Resume
		</a>
	</div>
</footer>

<style>
	a {
		display: flex;
		align-items: center;
		padding-inline: 0.75rem;
		font-size: 1.125rem;
		color: white;
		&:hover {
			color: var(--color-blue-300);
		}
	}
</style>
