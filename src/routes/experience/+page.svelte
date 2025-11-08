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

<div class="timeline-item" class:visible={mounted} style="transition-delay: 0ms">
	<div class="date-range">2023 - Present</div>
	<div class="content">
		<h3>Embedded Software Engineer • BRUSA HyPower AG</h3>
		<p>
			Developed the entire codebase for a 4x30KW DC-DC converter from scratch - this required
			managing multiple microcontrollers in parallel with their own peripherals, control loops, and
			communication channels. Took on technical leadership responsibilities, mentoring engineers and
			driving process improvements including CI-based automated compliance checks, build system
			modernisation and spearheading AI adoption efforts. Led on-site testing and integration
			support with global customers, including in China.
		</p>
	</div>
</div>

<div class="timeline-item" class:visible={mounted} style="transition-delay: 100ms">
	<div class="date-range">2022 - 2023</div>
	<div class="content">
		<h3>MEng Final Year • University of Leeds (1st class)</h3>
		<p>
			Completed an industry-backed master's thesis titled "Improving junction traffic flow using V2X
			networking and intelligent infrastructure with Connected Autonomous Vehicles". The project
			focused on modelling infrastructure systems and evaluating novel control methods including
			machine learning for safer, more efficient roads.
		</p>
	</div>
</div>

<div class="timeline-item" class:visible={mounted} style="transition-delay: 200ms">
	<div class="date-range">2021 - 2022</div>
	<div class="content">
		<h3>Associate Software Engineer • ZF Race Engineering</h3>
		<p>
			Developed sensor and control testing frameworks for high-performance onboard computers in ZF's
			motorsport division. Implemented and validated communication security algorithms, and aided
			with integration testing of brake control systems. The success of this placement led to
			support for an industry-backed master's project.
		</p>
	</div>
</div>

<div class="timeline-item" class:visible={mounted} style="transition-delay: 300ms">
	<div class="date-range">2018 - 2021</div>
	<div class="content">
		<h3>MEng Mechatronics and Robotics • University of Leeds</h3>
		<p>
			Multidisciplinary engineering program covering embedded software, machine learning, electronic
			circuit theory, mathematics, CAD design, and project management. Focused on problem-solving,
			creativity, and practical applications across robotics and control systems.
		</p>
	</div>
</div>

<style>
	.timeline-item {
		display: grid;
		grid-template-columns: 140px 1fr;
		gap: 30px;
		margin-bottom: 40px;
		opacity: 0;
		transform: translateX(-20px);
		transition:
			opacity 0.5s ease,
			transform 0.5s ease;
	}

	.timeline-item.visible {
		opacity: 1;
		transform: translateX(0);
	}

	.date-range {
		text-align: left;
		font-weight: 500;
		padding-top: 2px;
	}

	.content h3 {
		font-size: 1.1em;
		font-weight: 600;
		margin-bottom: 8px;
	}

	.content p {
		margin-bottom: 1em;
	}

	@media (max-width: 600px) {
		.timeline-item {
			grid-template-columns: 1fr;
			gap: 10px;
		}
	}
</style>
