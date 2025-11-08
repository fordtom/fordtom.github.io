<script lang="ts">
	// needed for mount detection to trigger CSS transitions
	// eslint-disable-next-line svelte/prefer-writable-derived
	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Projects - Tom Ford</title>
	<link rel="canonical" href="https://tomrford.com/projects" />
</svelte:head>

<div
	class="mb-[50px] translate-y-5 opacity-0 transition-all duration-500 ease-in-out"
	class:opacity-100={mounted}
	class:translate-y-0={mounted}
	style="transition-delay: 0ms"
>
	<h3 class="mb-3 text-[1.3em] font-semibold">mint</h3>
	<p class="mb-[1em]">
		A CLI tool for embedded development that builds hex files from Excel data and layout definitions
		(json/yaml/toml). Simplifies the workflow for parameterising embedded systems without manual hex
		editing. Written in Rust.
	</p>
	<p class="mb-[1em]">
		<a href="https://github.com/fordtom/mint" class="link-animated">View on GitHub →</a>
	</p>
</div>

<div
	class="mb-[50px] translate-y-5 opacity-0 transition-all duration-500 ease-in-out"
	class:opacity-100={mounted}
	class:translate-y-0={mounted}
	style="transition-delay: 100ms"
>
	<h3 class="mb-3 text-[1.3em] font-semibold">vscope</h3>
	<p class="mb-[1em]">
		A Python-based datalogger for embedded microcontrollers, using serial communication and an
		onboard state machine to perform high-resolution oscilloscope-style captures of internal
		variables for debugging and testing.
	</p>
	<p class="mb-[1em]">
		<a href="https://github.com/fordtom/vscope" class="link-animated">View on GitHub →</a>
	</p>
</div>

<div
	class="mb-[50px] translate-y-5 opacity-0 transition-all duration-500 ease-in-out"
	class:opacity-100={mounted}
	class:translate-y-0={mounted}
	style="transition-delay: 200ms"
>
	<h3 class="mb-3 text-[1.3em] font-semibold">minions</h3>
	<p class="mb-[1em]">
		A nix-flake based process manager. Designed as a simple web interface for managing long-running
		flakes on a Raspi. Based on a <a
			href="https://github.com/fordtom/minions-zig"
			class="link-animated">Zig project</a
		>
		that used SSR and static pages to achieve a simpler version of this.
	</p>
	<p class="mb-[1em]">
		<a href="https://github.com/fordtom/minions" class="link-animated">View on GitHub →</a>
	</p>
</div>

<div
	class="mb-[50px] translate-y-5 opacity-0 transition-all duration-500 ease-in-out"
	class:opacity-100={mounted}
	class:translate-y-0={mounted}
	style="transition-delay: 300ms"
>
	<h3 class="mb-3 text-[1.3em] font-semibold">bingo</h3>
	<p class="mb-[1em]">
		A Discord bot for hosting user-defined bingo games. Create custom games from event lists,
		distribute unique boards to players, vote on events, and track game progress and winners.
		Written in Go.
	</p>
	<p class="mb-[1em]">
		<a href="https://github.com/fordtom/bingo" class="link-animated">View on GitHub →</a>
	</p>
</div>
