<script lang="ts">
	import '../tailwind.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import AboutMe from './AboutMe.svelte';
	import ExperienceCard from './ExperienceCard.svelte';

	import bluecatLogo from '$lib/images/bluecat-networks-logo.png';
	import rustRecipeGalleryLogo from '$lib/images/rust-recipe-gallery.jpg';
	import shopLazyLogo from '$lib/images/shoplazy.jpg';
	import alkitabLogo from '$lib/images/alkitab.png';

	import GlobeLogo from 'virtual:icons/bi/globe-americas';
	import GithubLogo from 'virtual:icons/bi/github';
</script>

<svelte:head>
	<title>Stephen Guo</title>
</svelte:head>
<div class="flex flex-col h-screen">
	<div class="mb-auto">
		<main>
			<Header />
			<AboutMe />
			<div class="bg-white flex flex-col justify-center w-full">
				<div class="md:mx-16 max-md:mx-3 md:my-10 max-md:my-3">
					<div class="mx-auto max-w-screen-xl flex flex-col">
						<h1 class="text-4xl">Experience</h1>
						<hr class="md:mb-5 mb-3 bg-black h-0.5" />
					</div>
					<div class="mb-5">
						<ExperienceCard
							companyName="BlueCat Networks"
							tags={[
								'Kubernetes',
								'AWS',
								'GitLab CI',
								'Python',
								'Java',
								'Terraform',
								'SQL',
								'Docker',
								'Helm',
								'Jenkins',
								'Prometheus'
							]}
							dateRange="May 2021 - April 2022"
							location="Toronto, ON"
							jobTitle="Software Engineer Co-op"
							image={bluecatLogo}
						>
							<div class="flex flex-col justify-between grow">
								<p>
									I worked with a team of 7 software engineers in a Kanban DevOps environment. I
									first started working on a monolithic Java codebase for the first 3 months, which
									was deployed using a Jenkins pipeline. For the rest of my co-op, I started to work
									on a microservice-oriented data platform with a Python codebase using Trino SQL
									and Apache Airflow, which was deployed using AWS, Kubernetes, and Terraform.
									<!-- It was deployed using GitLab CI/CD, Kurbernetes, Helm, Terraform,
									Terragrunt, and AWS. This also includes writing helm charts for Kubernetes
									horizontal and vertcial pod autoscalers, deploying Prometheus alertmanager, and
									writing documentation on Confluence. -->
								</p>
								<a
									class="text-lg flex items-center text-blue-600 hover:text-blue-800 mt-2"
									href="https://bluecatnetworks.com/"
									target="_blank"
								>
									<GlobeLogo class="pr-1" />
									Link to website
								</a>
							</div>
						</ExperienceCard>
					</div>
					<div class="mx-auto max-w-screen-xl flex flex-col">
						<h1 class="text-4xl">Projects</h1>
						<hr class="md:mb-5 mb-3 bg-black h-0.5" />
					</div>
					<div class="mb-5">
						<ExperienceCard
							companyName="Rust Recipe Gallery"
							tags={['Rust', 'PostgreSQL', 'Tailwind CSS']}
							dateRange=""
							location=""
							jobTitle=""
							image={rustRecipeGalleryLogo}
						>
							<div class="flex flex-col justify-between grow">
								<p>
									Created a full-stack recipe sharing platform fully in Rust, with Leptos and
									Tailwind CSS as the frontend, and Auxm and Diesel as the backend.
								</p>
								<a
									class="text-lg flex items-center text-blue-600 hover:text-blue-800 mt-2"
									href="https://github.com/Epicsteve2/rust-recipe-gallery"
									target="_blank"
								>
									<GithubLogo class="pr-1" />
									Link to git repository
								</a>
							</div>
						</ExperienceCard>
						<ExperienceCard
							companyName="ShopLazy"
							tags={['Flutter', 'Dart', 'Firebase']}
							dateRange=""
							location=""
							jobTitle=""
							image={shopLazyLogo}
						>
							<div class="flex flex-col justify-between grow">
								<p>
									During the
									<a
										href="https://2021.hackthenorth.com/"
										class="text-blue-600 hover:text-blue-800"
										target="_blank">Hack the North 2021</a
									> hackathon, I teamed up with a group of 4 to create a mobile grocery ordering and
									delivery application using Flutter and Firebase.
								</p>
								<a
									class="text-lg flex items-center text-blue-600 hover:text-blue-800 mt-2"
									href="https://github.com/Epicsteve2/ShopLazy"
									target="_blank"
								>
									<GithubLogo class="pr-1" />
									Link to git repository
								</a>
							</div>
						</ExperienceCard>
						<ExperienceCard
							companyName="Alkitab"
							tags={[
								'Svelte',
								'Bootstrap',
								'TypeScript',
								'MongoDB',
								'Docker',
								'Kubernetes',
								'Helm',
								'Pulumi',
								'NGINX',
								'Sockets'
							]}
							dateRange=""
							location=""
							jobTitle=""
							image={alkitabLogo}
						>
							<div class="flex flex-col justify-between grow">
								<p>
									Created an e-book sharing platform in a team of two, deployed using Pulumi on
									Kubernetes with the Linode cloud provider. The app uses sockets for real-time
									highlighting of books between multiple users
								</p>
								<a
									class="text-lg flex items-center text-blue-600 hover:text-blue-800 mt-2"
									href="https://github.com/Epicsteve2/cscc09-alkitab"
									target="_blank"
								>
									<GithubLogo class="pr-1" />
									Link to git repository
								</a>
							</div>
						</ExperienceCard>
					</div>
				</div>
			</div>
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
