<script lang="ts">
	import '../tailwind.css';
	import Header from './Header.svelte';
	// import backgroundPic from '$lib/images/background.jpg';
	import Footer from './Footer.svelte';
	import AboutMe from './AboutMe.svelte';
	import ExperienceCard from './ExperienceCard.svelte';

	import bluecatLogo from '$lib/images/bluecat-networks-logo.png';

	// const experiences = [
	// 	{
	// 		companyName: 'BlueCat Networks',
	// 		tags: [
	// 			'Kubernetes',
	// 			'AWS',
	// 			'GitLab CI',
	// 			'Python',
	// 			'Java',
	// 			'Terraform',
	// 			'SQL',
	// 			'Docker',
	// 			'Helm'
	// 		],
	// 		dateRange: 'May 2021 - April 2022',
	// 		location: 'Toronto, ON',
	// 		jobTitle: 'Software Engineer Co-op'
	// 	}
	// ];
</script>

<div class="flex flex-col h-screen">
	<div class="mb-auto">
		<main>
			<Header />
			<AboutMe />
			<!-- {#each experiences as expierence}
				<ExperienceCard {...expierence}>
					idk

					<a href="https://bluecatnetworks.com/">Link to website</a>
				</ExperienceCard>
			{/each} -->

			<div class="bg-white flex flex-col justify-center w-full">
				<div class="mx-auto max-w-5xl">
					<h1 >Experience</h1>
					<hr class="max-w-5xl m-1 bg-black h-1">
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
					<p>
						I worked with a team of 7 software engineers in a Kanban DevOps environment. I first
						started working on a monolithic Java codebase for the first 3 months, which was deployed
						on a Jenkins pipeline. For the rest of my co-op, I started to work on a
						microservice-oriented data platform with a Python codebase with Trino SQL and Apache
						Airflow. It was deployed using GitLab CI/CD, Kurbernetes, Helm, Terraform, Terragrunt,
						and AWS. This also includes writing helm charts for Kubernetes horizontal and vertcial
						pod autoscalers, deploying Prometheus alertmanager, and writing documentation on
						Confluence.
					</p>
					<a href="https://bluecatnetworks.com/">Link to website</a>
				</ExperienceCard>
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
