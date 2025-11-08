<script lang="ts">
	// needed for mount detection to trigger CSS transitions
	// eslint-disable-next-line svelte/prefer-writable-derived
	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Experience - Tom Ford</title>
	<link rel="canonical" href="https://tomrford.com/experience" />
</svelte:head>

<div class="grid grid-cols-[140px_1fr] gap-[30px] mb-10 opacity-0 -translate-x-5 transition-all duration-500 ease-in-out max-[600px]:grid-cols-1 max-[600px]:gap-2.5" class:opacity-100={mounted} class:translate-x-0={mounted} style="transition-delay: 0ms">
	<div class="text-left font-medium pt-0.5">2023 - Present</div>
	<div>
		<h3 class="text-[1.1em] font-semibold mb-2">Embedded Software Engineer • BRUSA HyPower AG</h3>
		<p class="mb-[1em]">
			Developed the entire codebase for a 4x30KW DC-DC converter from scratch - this required
			managing multiple microcontrollers in parallel with their own peripherals, control loops, and
			communication channels. Took on technical leadership responsibilities, mentoring engineers and
			driving process improvements including CI-based automated compliance checks, build system
			modernisation and spearheading AI adoption efforts. Led on-site testing and integration
			support with global customers, including in China.
		</p>
	</div>
</div>

<div class="grid grid-cols-[140px_1fr] gap-[30px] mb-10 opacity-0 -translate-x-5 transition-all duration-500 ease-in-out max-[600px]:grid-cols-1 max-[600px]:gap-2.5" class:opacity-100={mounted} class:translate-x-0={mounted} style="transition-delay: 100ms">
	<div class="text-left font-medium pt-0.5">2022 - 2023</div>
	<div>
		<h3 class="text-[1.1em] font-semibold mb-2">MEng Final Year • University of Leeds (1st class)</h3>
		<p class="mb-[1em]">
			Completed an industry-backed master's thesis titled "Improving junction traffic flow using V2X
			networking and intelligent infrastructure with Connected Autonomous Vehicles". The project
			focused on modelling infrastructure systems and evaluating novel control methods including
			machine learning for safer, more efficient roads.
		</p>
	</div>
</div>

<div class="grid grid-cols-[140px_1fr] gap-[30px] mb-10 opacity-0 -translate-x-5 transition-all duration-500 ease-in-out max-[600px]:grid-cols-1 max-[600px]:gap-2.5" class:opacity-100={mounted} class:translate-x-0={mounted} style="transition-delay: 200ms">
	<div class="text-left font-medium pt-0.5">2021 - 2022</div>
	<div>
		<h3 class="text-[1.1em] font-semibold mb-2">Associate Software Engineer • ZF Race Engineering</h3>
		<p class="mb-[1em]">
			Developed sensor and control testing frameworks for high-performance onboard computers in ZF's
			motorsport division. Implemented and validated communication security algorithms, and aided
			with integration testing of brake control systems. The success of this placement led to
			support for an industry-backed master's project.
		</p>
	</div>
</div>

<div class="grid grid-cols-[140px_1fr] gap-[30px] mb-10 opacity-0 -translate-x-5 transition-all duration-500 ease-in-out max-[600px]:grid-cols-1 max-[600px]:gap-2.5" class:opacity-100={mounted} class:translate-x-0={mounted} style="transition-delay: 300ms">
	<div class="text-left font-medium pt-0.5">2018 - 2021</div>
	<div>
		<h3 class="text-[1.1em] font-semibold mb-2">MEng Mechatronics and Robotics • University of Leeds</h3>
		<p class="mb-[1em]">
			Multidisciplinary engineering program covering embedded software, machine learning, electronic
			circuit theory, mathematics, CAD design, and project management. Focused on problem-solving,
			creativity, and practical applications across robotics and control systems.
		</p>
	</div>
</div>
