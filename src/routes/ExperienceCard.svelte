<script lang="ts">
	import type { Snippet } from 'svelte';
	import GlobeLogo from 'virtual:icons/bi/globe-americas';

	interface Props {
		companyName: string;
		tags: string[];
		dateRange: string;
		location: string;
		jobTitle: string;
		image: string;
		altImage: string;
		websiteUrl?: string;
		children: Snippet;
	}

	let { companyName, tags, dateRange, location, jobTitle, image, altImage, websiteUrl, children }: Props = $props();
</script>

<div class="mb-8 max-w-(--breakpoint-xl) border-2 border-black p-5 lg:mx-auto lg:flex">
	<div class="flex aspect-square justify-center md:basis-1/4">
		<img src={image} alt={altImage} class="object-contain max-sm:pb-3 md:pr-5 lg:w-full" />
	</div>
	<div class="flex flex-col lg:basis-3/4">
		<div class="flex justify-between">
			<h3 class="text-2xl">{companyName}</h3>
			<p class="text-2xl">{location}</p>
		</div>
		<div class="flex justify-between">
			<p>{jobTitle}</p>
			<p>{dateRange}</p>
		</div>

		<ul class="mt-1 flex flex-wrap">
			{#each tags as tag (tag)}
				<li class="mr-2 mb-2 rounded-lg bg-indigo-200 px-2 py-1">{tag}</li>
			{/each}
		</ul>
		{@render children()}
		{#if websiteUrl}
			<a
				class="link mt-auto flex items-center text-lg"
				href={websiteUrl}
				target="_blank"
				rel="noopener noreferrer"
			>
				<GlobeLogo class="pr-1" />
				Link to website
			</a>
		{/if}
	</div>
</div>
