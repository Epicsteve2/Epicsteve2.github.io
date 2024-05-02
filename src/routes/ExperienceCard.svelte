<script lang="ts">
	export let companyName: string;
	export let tags: string[];
	export let dateRange: string;
	export let location: string;
	export let jobTitle: string;
	export let image: string;
</script>

<div class="md:container md:flex mx-auto p-5 border-black border-2">
    <div class="shrink-0 ">

        <!-- class="h-96 w-full md:h-full md:w-96 object-cover md:mr-5" -->
        <img
            src={image}
            alt="BlueCat Networks Logo"
            class="object-fill"
        />
    </div>
	<div>
		<div class="flex justify-between">
			<h1 class="text-2xl">{companyName}</h1>
			<h2 class="text-2xl">{location}</h2>
		</div>
		<div class="flex justify-between">
			<h2>{jobTitle}</h2>
			<h2>{dateRange}</h2>
		</div>

		<ul class="flex flex-wrap">
			{#each tags as tag}
				<li class="m-1 bg-indigo-200 p-1 rounded-lg">{tag}</li>
			{/each}
		</ul>
		<slot />
	</div>
</div>
