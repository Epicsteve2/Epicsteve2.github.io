<script lang="ts">
	const viewboxWidth = 50;
	const circleWidth = 20;
	const shadowLength = 0.5;

	const profilePicCircleStyle = `drop-shadow(${shadowLength}px ${shadowLength}px 0 white)
drop-shadow(-${shadowLength}px ${shadowLength}px 0 white)
drop-shadow(${shadowLength}px -${shadowLength}px 0 white)
drop-shadow(-${shadowLength}px -${shadowLength}px 0 white)`;
	import profilePic from '$lib/images/profile-pic-tree-purple-hat-cropped-square.png';
</script>

<!-- to do responsiveness, target mobile using no sizes as default. then for bigger ones, do `md` or `lg` -->
<div
	class="bg-transparent py-5 sm:py-12 max-w-5xl mx-auto rounded-xl flex flex-col sm:flex-row px-5"
>
	<svg
		viewBox="0 0 {viewboxWidth} {viewboxWidth}"
		class="max-sm:rounded-t-xl sm:rounded-l-3xl sm:max-w-72 lg:max-w-96"
	>
		<defs>
			<pattern id="profile-photo" width="1" height="1">
				<image href={profilePic} x="0" y="0" width={circleWidth * 2} height={circleWidth * 2} />
			</pattern>
			<mask id="mask" x="0" y="0" width={viewboxWidth} height={viewboxWidth}>
				<rect x="0" y="0" width={viewboxWidth} height={viewboxWidth} fill="#fff"></rect>
				<circle cx={viewboxWidth / 2} cy={viewboxWidth / 2} r={circleWidth}></circle>
			</mask>
		</defs>
		<circle
			cx={viewboxWidth / 2}
			cy={viewboxWidth / 2}
			r={circleWidth}
			fill="#000"
			fill-opacity="0.6"
		></circle>
		<circle
			id="profile-picture-circle"
			cx={viewboxWidth / 2}
			cy={viewboxWidth / 2}
			r={circleWidth}
			fill="url(#profile-photo)"
			style:-webkit-filter={profilePicCircleStyle}
			style:-filter={profilePicCircleStyle}
		></circle>
		<rect x="0" y="0" width={viewboxWidth} height={viewboxWidth} mask="url(#mask)" fill="#fff"
		></rect>
	</svg>
	<!-- border is to remove a black line sometimes -->
	<div
		class="bg-white max-sm:rounded-b-xl sm:rounded-r-3xl border-solid border-white border-2 flex flex-col justify-center max-sm:px-8 pr-8 pb-8 grow"
	>
		<h1 class="text-black text-3xl md:text-4xl lg:text-5xl pb-2">Stephen Guo</h1>
		<p class="text-black text-base md:text-lg lg:text-xl">University of Toronto 2019 - 2024</p>
		<p class="text-black text-base md:text-lg lg:text-xl">
			Backend Software Developer at Leap Softwares
		</p>
	</div>
</div>
