<script lang="ts">
	import GithubLogo from 'virtual:icons/bi/github';
	import LinkedInLogo from 'virtual:icons/bi/linkedin';
	import EnvelopeLogo from 'virtual:icons/bi/envelope-fill';
	import FileTextLogo from 'virtual:icons/bi/file-earmark-text-fill';
</script>

<!-- bg-white  -->
<footer class="flex flex-col items-center py-6 bg-[#feffee]">
	<h2 class="text-black text-4xl pb-1">Contact me!</h2>
	<div class="flex flex-row">
		<a
			class="text-lg flex items-center px-3 text-[#aa7c97] hover:text-[#633f5c]"
			href="https://github.com/Epicsteve2"
			target="_blank"
		>
			<!-- no "w-fill" -->
			<GithubLogo class="pr-1" />
			GitHub
		</a>
		<a
			class="text-lg flex items-center px-3 text-blue-600 hover:text-blue-800"
			href="https://www.linkedin.com/in/stephen-guo-399959192/"
			target="_blank"
		>
			<LinkedInLogo class="pr-1" />
			LinkedIn
		</a>
		<a
			class="text-lg flex items-center px-3 text-blue-600 hover:text-blue-800"
			href="mailto:steve.guo@mail.utoronto.ca"
			target="_blank"
		>
			<EnvelopeLogo class="pr-1" />
			Email
		</a>
		<a
			class="text-lg flex items-center px-3 text-blue-600 hover:text-blue-800"
			href="https://github.com/Epicsteve2/LaTeX-Files/raw/main/pdf/StephenGuo_Resume.pdf"
			target="_blank"
		>
			<FileTextLogo class="pr-1" />
			Resume
		</a>
	</div>
</footer>
