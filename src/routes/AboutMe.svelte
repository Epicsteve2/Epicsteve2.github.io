<script lang="ts">
	import profileAdo from '$lib/images/2025-08-03-stephen-ado-concert.jpg';
</script>

<div class="bg-white m-3 md:m-6 p-4 md:p-3 rounded-3xl">
	<div class="max-w-5xl mx-auto lg:flex p-3">
		<div class="lg:mr-5 max-lg:mb-3">
			<h1 class="text-3xl">About Me</h1>
			<p class="pb-4">
				I'm currently working at Ridges as a Software Engineer, and I received a degree in Computer
				Science at the University of Toronto.
			</p>
			<p class="">I'm currently learning about:</p>
			<ul class="list-disc list-inside indent-2 pb-2">
				<li>Rust</li>
				<li>
					Neovim (I use <a
						href="https://www.lazyvim.org/"
						class="text-blue-600 hover:text-blue-800"
						target="_blank">LazyVim</a
					>)
				</li>
				<li>Linux (I use NixOS and Fedora KDE)</li>
				<li>
					Front end technologies such as SvelteKit (Which this site is built in!), Vue.js, and
					Tailwind CSS
				</li>
			</ul>
			<p class="py-2">
				Outside of work, I enjoy playing Chess, rock climbing (sometimes!), biking, board games,
				badminton, basketball, and going to the gym.
			</p>
		</div>
		<div class="w-full md:w-1/2 flex justify-center mx-auto">
			<img
				src={profileAdo}
				alt="Stephen Guo at Ado's Hibana concert in Toronto"
				class="object-cover lg:w-full lg:h-auto"
			/>
		</div>
	</div>
</div>
