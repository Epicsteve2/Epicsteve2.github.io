<script lang="ts">
	export let companyName: string;
	export let tags: string[];
	export let dateRange: string;
	export let location: string;
	export let jobTitle: string;
	export let image: string;
	export let altImage: string;
</script>

<!-- md:container -->
<div class="lg:flex lg:mx-auto p-5 border-black border-2 max-w-screen-xl mb-8">
	<div class="md:basis-1/4 flex justify-center">
		<!-- class="h-96 w-full md:h-full md:w-96 object-cover md:mr-5" -->
		<img
			src={image}
			alt={altImage}
			class="object-cover lg:w-full lg:h-auto md:pr-5 sm:max-lg:w-1/2 max-sm:pb-3"
		/>
	</div>
	<div class="lg:basis-3/4 flex flex-col">
		<div class="flex justify-between">
			<h1 class="text-2xl">{companyName}</h1>
			<h2 class="text-2xl">{location}</h2>
		</div>
		<div class="flex justify-between">
			<h2>{jobTitle}</h2>
			<h2>{dateRange}</h2>
		</div>

		<ul class="flex flex-wrap mt-1">
			{#each tags as tag}
				<li class="mr-2 mb-2 bg-indigo-200 px-2 py-1 rounded-lg">{tag}</li>
			{/each}
		</ul>
		<slot />
	</div>
</div>
