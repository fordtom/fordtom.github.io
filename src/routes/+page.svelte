<script lang="ts">
	// needed for mount detection to trigger CSS transitions
	// eslint-disable-next-line svelte/prefer-writable-derived
	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Tom Ford</title>
	<link rel="canonical" href="https://tomrford.com/" />
</svelte:head>

<h2 class:visible={mounted} style="transition-delay: 0ms">Hi, I'm Tom.</h2>

<p class:visible={mounted} style="transition-delay: 500ms">
	I'm an embedded software engineer based in Switzerland, currently working on next-generation
	automotive power electronics. I relocated from the UK in 2023 after completing a first-class MEng
	in Mechatronics and Robotics at Leeds.
</p>

<p class:visible={mounted} style="transition-delay: 600ms">
	My current focus is on developing control systems for high-power AC-DC and DC-DC converters. I
	work primarily in C and Python, building systems that need to be both performant and robust. In my
	free time I am developing a selection of small projects in Rust, Zig and other languages,
	including embedded development tools. I also build and fly small UAVs.
</p>

<style>
	h2,
	p {
		margin-bottom: 1em;
		opacity: 0;
		transform: translateY(10px);
		transition:
			opacity 0.5s ease,
			transform 0.5s ease;
	}

	h2.visible,
	p.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>
