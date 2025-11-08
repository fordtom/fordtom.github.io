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

<div class="project" class:visible={mounted} style="transition-delay: 0ms">
	<h3>mint</h3>
	<p>
		A CLI tool for embedded development that builds hex files from Excel data and layout definitions
		(json/yaml/toml). Simplifies the workflow for parameterising embedded systems without manual hex
		editing. Written in Rust.
	</p>
	<p><a href="https://github.com/fordtom/mint">View on GitHub →</a></p>
</div>

<div class="project" class:visible={mounted} style="transition-delay: 100ms">
	<h3>vscope</h3>
	<p>
		A Python-based datalogger for embedded microcontrollers, using serial communication and an
		onboard state machine to perform high-resolution oscilloscope-style captures of internal
		variables for debugging and testing.
	</p>
	<p><a href="https://github.com/fordtom/vscope">View on GitHub →</a></p>
</div>

<div class="project" class:visible={mounted} style="transition-delay: 200ms">
	<h3>minions</h3>
	<p>
		A nix-flake based process manager. Designed as a simple web interface for managing long-running
		flakes on a Raspi. Based on a <a href="https://github.com/fordtom/minions-zig">Zig project</a>
		that used SSR and static pages to achieve a simpler version of this.
	</p>
	<p><a href="https://github.com/fordtom/minions">View on GitHub →</a></p>
</div>

<div class="project" class:visible={mounted} style="transition-delay: 300ms">
	<h3>bingo</h3>
	<p>
		A Discord bot for hosting user-defined bingo games. Create custom games from event lists,
		distribute unique boards to players, vote on events, and track game progress and winners.
		Written in Go.
	</p>
	<p><a href="https://github.com/fordtom/bingo">View on GitHub →</a></p>
</div>

<style>
	.project {
		margin-bottom: 50px;
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s ease,
			transform 0.5s ease;
	}

	.project.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.project h3 {
		font-size: 1.3em;
		font-weight: 600;
		margin-bottom: 12px;
	}

	.project p {
		margin-bottom: 1em;
	}

	.project a {
		color: #0066cc;
		text-decoration: none;
		position: relative;
		transition: color 0.2s ease;
	}

	.project a::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 1px;
		background: #0066cc;
		transition: width 0.3s ease;
	}

	.project a:hover {
		color: #0052a3;
	}

	.project a:hover::after {
		width: 100%;
	}
</style>
