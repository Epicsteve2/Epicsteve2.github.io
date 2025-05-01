<script lang="ts">
	import '../tailwind.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import AboutMe from './AboutMe.svelte';
	import ExperienceCard from './ExperienceCard.svelte';

	import leapSoftwaresLogo from '$lib/images/leap-softwares-logo.png';
	import bluecatLogo from '$lib/images/bluecat-networks-logo.png';

	import GlobeLogo from 'virtual:icons/bi/globe-americas';
	// import GithubLogo from 'virtual:icons/bi/github';
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
							companyName="Leap Softwares"
							tags={[
								'NestJS',
								'TypeScript',
								'Microsoft Azure',
								'Terraform',
								'PostgreSQL',
								'Rust',
								'Retool',
								'GraphQL'
							]}
							dateRange="October 2024 - Present"
							location="Toronto, ON"
							jobTitle="Full Stack Software Engineer"
							image={leapSoftwaresLogo}
							altImage="NestJS Logo"
						>
							<div class="flex flex-col justify-between grow">
								<div>
									<p>
										I developed a dashboard + Excel/PDF report generators for insurance policies
										with a team of 4. I designed API endpoints, CI/CD pipelines, and monitoring
										infrastructure for alerts.
									</p>
									<br />
									<p>
										I also wrote a small Azure Function in Rust to interact with the Slack websocket
										API for creating a Slack app to interact with our pipelines.
									</p>
								</div>
							</div>
						</ExperienceCard>
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
							altImage="BlueCat Networks Logo"
						>
							<div class="flex flex-col justify-between grow">
								<p>
									I worked with a team of 7 software engineers in a Kanban DevOps environment. I
									first started working on a monolithic Java codebase for the first 3 months, which
									was deployed using a Jenkins pipeline. For the rest of my co-op, I started to work
									on a microservice-oriented data platform with a Python codebase using Trino SQL
									and Apache Airflow, which was deployed using AWS, Kubernetes, and Terraform.
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
