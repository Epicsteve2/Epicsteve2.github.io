<script lang="ts">
	import '../tailwind.css';
	import Header from './Header.svelte';
	// import backgroundPic from '$lib/images/background.jpg';
	import Footer from './Footer.svelte';
	import AboutMe from './AboutMe.svelte';
	import ExperienceCard from './ExperienceCard.svelte';

	import bluecatLogo from '$lib/images/bluecat-networks-logo.png';
	import GlobeLogo from 'virtual:icons/bi/globe-americas';
</script>

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
							'Jenkins'
						]}
						dateRange="May 2021 - April 2022"
						location="Toronto, ON"
						jobTitle="Software Engineer Co-op"
						image={bluecatLogo}
					>
						<div class="flex flex-col justify-between grow">
							<p>
								I worked with a team of 7 software engineers in a Kanban DevOps environment. I first
								started working on a monolithic Java codebase for the first 3 months, which was
								deployed on a Jenkins pipeline. For the rest of my co-op, I started to work on a
								microservice-oriented data platform with a Python codebase with Trino SQL and Apache
								Airflow. It was deployed using GitLab CI/CD, Kurbernetes, Helm, Terraform,
								Terragrunt, and AWS. This also includes writing helm charts for Kubernetes
								horizontal and vertcial pod autoscalers, deploying Prometheus alertmanager, and
								writing documentation on Confluence.
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
