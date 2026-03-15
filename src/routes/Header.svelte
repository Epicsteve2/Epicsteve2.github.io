<script lang="ts">
	import profilePic from '$lib/images/profile-pic-tree-purple-hat-cropped-square.png';

	const viewboxWidth = 50;
	const circleRadius = 20;
	const center = viewboxWidth / 2;
	const shadowLength = 0.5;

	const dropShadow = `drop-shadow(${shadowLength}px ${shadowLength}px 0 white)
drop-shadow(-${shadowLength}px ${shadowLength}px 0 white)
drop-shadow(${shadowLength}px -${shadowLength}px 0 white)
drop-shadow(-${shadowLength}px -${shadowLength}px 0 white)`;
</script>

<!-- to do responsiveness, target mobile using no sizes as default. then for bigger ones, do `md` or `lg` -->
<div
	class="mx-auto flex max-w-5xl flex-col rounded-xl bg-transparent px-5 py-5 sm:flex-row sm:py-12"
>
	<svg
		viewBox="0 0 {viewboxWidth} {viewboxWidth}"
		class="max-sm:rounded-t-xl sm:max-w-72 sm:rounded-l-3xl lg:max-w-96"
	>
		<defs>
			<pattern id="profile-photo" width="1" height="1">
				<image
					href={profilePic}
					x="0"
					y="0"
					width={circleRadius * 2}
					height={circleRadius * 2}
				/>
			</pattern>
			<mask id="mask" x="0" y="0" width={viewboxWidth} height={viewboxWidth}>
				<rect x="0" y="0" width={viewboxWidth} height={viewboxWidth} fill="#fff"></rect>
				<circle cx={center} cy={center} r={circleRadius}></circle>
			</mask>
		</defs>
		<circle cx={center} cy={center} r={circleRadius} fill="#000" fill-opacity="0.6"></circle>
		<circle
			cx={center}
			cy={center}
			r={circleRadius}
			fill="url(#profile-photo)"
			style:-webkit-filter={dropShadow}
			style:filter={dropShadow}
		></circle>
		<rect x="0" y="0" width={viewboxWidth} height={viewboxWidth} mask="url(#mask)" fill="#fff"
		></rect>
	</svg>
	<!-- border is to remove a black line sometimes -->
	<div
		class="flex grow flex-col justify-center border-2 border-solid border-white bg-white pr-8 pb-8 max-sm:rounded-b-xl max-sm:px-8 sm:rounded-r-3xl"
	>
		<h1 class="pb-2 text-3xl text-black md:text-4xl lg:text-5xl">Stephen Guo</h1>
		<p class="text-base text-black md:text-lg lg:text-xl">University of Toronto 2019 - 2024</p>
		<p class="text-base text-black md:text-lg lg:text-xl">Founding Engineer at Strello Health</p>
	</div>
</div>
