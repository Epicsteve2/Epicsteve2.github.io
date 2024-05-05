<script lang="ts">
	import GithubLogo from 'virtual:icons/bi/github';
	import LinkedInLogo from 'virtual:icons/bi/linkedin';
	import EnvelopeLogo from 'virtual:icons/bi/envelope-fill';
	import FileTextLogo from 'virtual:icons/bi/file-earmark-text-fill';
</script>

<!-- color palette #857FA2, #FAF5DF, #DEAE9C, #EDD2A5, #597493 -->
<!-- #DEAE9C, #A18BA2, #EDD2A5, #597493, #563A57 -->
<!-- bg-white  -->
<footer class="flex flex-col items-center py-6 bg-[#563A57]">
	<h2 class="text-white text-4xl pb-1">Contact me!</h2>
	<div class="flex flex-row">
		<a
			class="text-lg flex items-center px-3 text-[#A18BA2] hover:text-[#563A57]"
			href="https://github.com/Epicsteve2"
			target="_blank"
		>
			<!-- no "w-fill" -->
			<GithubLogo class="pr-1" />
			GitHub
		</a>
		<a
			class="text-lg flex items-center px-3 text-[#A18BA2] hover:text-[#563A57]"
			href="https://www.linkedin.com/in/stephen-guo-399959192/"
			target="_blank"
		>
			<LinkedInLogo class="pr-1" />
			LinkedIn
		</a>
		<a
			class="text-lg flex items-center px-3 text-[#A18BA2] hover:text-[#563A57]"
			href="mailto:steve.guo@mail.utoronto.ca"
			target="_blank"
		>
			<EnvelopeLogo class="pr-1" />
			Email
		</a>
		<a
			class="text-lg flex items-center px-3 text-[#A18BA2] hover:text-[#563A57]"
			href="https://github.com/Epicsteve2/LaTeX-Files/raw/main/pdf/StephenGuo_Resume.pdf"
			target="_blank"
		>
			<FileTextLogo class="pr-1" />
			Resume
		</a>
	</div>
</footer>
