<script lang="ts">
	import profileAdo from '$lib/images/2025-08-03-stephen-ado-concert.jpg';
</script>

<div class="m-3 rounded-3xl bg-white p-4 md:m-6 md:p-3">
	<div class="mx-auto max-w-5xl p-3 lg:flex">
		<div class="max-lg:mb-3 lg:mr-5">
			<h2 class="text-3xl">About Me</h2>
			<p class="pb-4">
				I'm currently working at Strello Health as a Founding Engineer, and I received a degree
				in Computer Science at the University of Toronto.
			</p>
			<p>I'm currently learning about:</p>
			<ul class="list-inside list-disc pb-2 indent-2">
				<li>Rust</li>
				<li>
					Neovim (I use <a
						href="https://www.lazyvim.org/"
						class="link"
						target="_blank"
					rel="noopener noreferrer">LazyVim</a
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
		<div class="mx-auto flex w-full justify-center md:w-1/2">
			<img
				src={profileAdo}
				alt="Stephen Guo at Ado's Hibana concert in Toronto"
				class="object-cover lg:h-auto lg:w-full"
			/>
		</div>
	</div>
</div>
