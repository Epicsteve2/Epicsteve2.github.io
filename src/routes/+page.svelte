<script lang="ts">
	import '../tailwind.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import AboutMe from './AboutMe.svelte';
	import ExperienceCard from './ExperienceCard.svelte';

	import leapSoftwaresLogo from '$lib/images/leap-softwares-logo.png';
	import bluecatLogo from '$lib/images/bluecat-networks-logo.png';
	import ridgesLogo from '$lib/images/ridges-logo.png';
	import strelloLogo from '$lib/images/strello-health-logo.jpg';
</script>

<svelte:head>
	<title>Stephen Guo</title>
</svelte:head>
<div class="flex h-screen flex-col">
	<div class="mb-auto">
		<main>
			<Header />
			<AboutMe />
			<div class="flex w-full flex-col justify-center bg-white">
				<div class="max-md:mx-3 max-md:my-3 md:mx-16 md:my-10">
					<div class="mx-auto flex max-w-(--breakpoint-xl) flex-col">
						<h1 class="text-4xl">Experience</h1>
						<hr class="mb-3 h-0.5 bg-black md:mb-5" />
					</div>
					<div class="mb-5">
						<ExperienceCard
							companyName="Strello Health"
							tags={['TypeScript', 'Azure']}
							dateRange="January 2026 - Present"
							location="Toronto, ON"
							jobTitle="Founding Engineer"
							image={strelloLogo}
							altImage="Strello Health Logo"
							websiteUrl="https://strello.health/"
						>
							<p class="mb-5">Building and deploying AI voice agents.</p>
						</ExperienceCard>
						<ExperienceCard
							companyName="Ridges"
							tags={['Python', 'AWS', 'PostgreSQL', 'Next.js', 'Docker']}
							dateRange="September 2025 - January 2026"
							location="Toronto, ON"
							jobTitle="Backend Software Engineer"
							image={ridgesLogo}
							altImage="Ridges Logo"
							websiteUrl="https://www.ridges.ai/"
						>
							<p class="mb-5">
								Collaborated with a six-person startup team to design, build, and maintain an AI
								agent benchmarking platform on <a
									class="link"
									href="https://bittensor.com/about"
									target="_blank"
								>
									Bittensor
								</a>. The platform enabled users to develop and evaluate AI agents, producing a
								state-of-the-art agent that solved 96% of
								<a
									class="link"
									href="https://github.com/exercism/python/tree/main/exercises/practice"
									target="_blank"
								>
									Polyglot Python problems
								</a>.
							</p>
						</ExperienceCard>
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
								'GraphQL',
								'Redis'
							]}
							dateRange="October 2024 - September 2025"
							location="Toronto, ON"
							jobTitle="Software Engineer"
							image={leapSoftwaresLogo}
							altImage="Leap Softwares Logo"
							websiteUrl="https://leapsoftwares.com"
						>
							<p class="mb-5">
								I developed a financial services management system + Excel/PDF report generators
								for insurance policies with a team of 6. I designed API endpoints, CI/CD
								pipelines, and monitoring infrastructure for alerts. Also, I worked on a lot of
								SQL scripting and optimization
							</p>
							<p>
								For the monitoring infrastructure, I wrote a small Azure Function in Rust to
								interact with the Slack websocket API for creating a Slack app to interact with
								our pipelines.
							</p>
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
							websiteUrl="https://bluecatnetworks.com/"
						>
							<p class="mb-5">
								I worked with a team of 7 software engineers in a Kanban DevOps environment to
								build and maintain a data platform handling 100 million+ of users.
							</p>
							<p>
								I first started working on a monolithic Java codebase for the first 3 months,
								which was deployed using a Jenkins pipeline. For the rest of my co-op, I started
								to work on a microservice-oriented data platform with a Python codebase using
								Trino SQL and Apache Airflow, which was deployed using AWS, Kubernetes, and
								Terraform.
							</p>
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
