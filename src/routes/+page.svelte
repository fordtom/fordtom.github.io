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

<h2
	class="mb-[1em] translate-y-[10px] text-2xl font-semibold opacity-0 transition-all duration-500 ease-in-out"
	class:opacity-100={mounted}
	class:translate-y-0={mounted}
	style="transition-delay: 0ms"
>
	Hi, I'm Tom.
</h2>

<p
	class="mb-[1em] translate-y-[10px] opacity-0 transition-all duration-500 ease-in-out"
	class:opacity-100={mounted}
	class:translate-y-0={mounted}
	style="transition-delay: 500ms"
>
	I'm an embedded software engineer based in Switzerland, currently working on next-generation
	automotive power electronics at
	<a href="https://www.brusahypower.com/home/" class="link-animated">BRUSA HyPower AG</a>
	. I relocated from the UK in 2023 after completing a first-class MEng
	in Mechatronics and Robotics at the University of Leeds.
</p>

<p
	class="mb-[1em] translate-y-[10px] opacity-0 transition-all duration-500 ease-in-out"
	class:opacity-100={mounted}
	class:translate-y-0={mounted}
	style="transition-delay: 600ms"
>
	My current focus is on developing control systems for high-power AC-DC and DC-DC converters. I
	work primarily in C and Python, building systems that need to be both performant and robust. In my
	free time I'm developing a selection of small projects in Rust, Zig and other languages, including
	embedded development tools. I also build and fly small UAVs.
</p>

<p
	class="mb-[1em] translate-y-[10px] opacity-0 transition-all duration-500 ease-in-out"
	class:opacity-100={mounted}
	class:translate-y-0={mounted}
	style="transition-delay: 700ms"
>
	You can reach me in a few places, including
	<a href="https://github.com/fordtom" class="link-animated">GitHub</a>,
	<a href="https://www.linkedin.com/in/tomrford/" class="link-animated">LinkedIn</a>,
	<a href="https://x.com/tomrford" class="link-animated">X</a> or by
	<a href="mailto:t@tomrford.com" class="link-animated">email</a>.
</p>
