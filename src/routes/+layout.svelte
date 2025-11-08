<script lang="ts">
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';
	import { fade, fly } from 'svelte/transition';

	const { children } = $props();

	const isActive = (path: string) => $page.url.pathname === path;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" as="image" href="https://github.com/fordtom.png" />
</svelte:head>

<div class="container">
	<header in:fade={{ duration: 400 }}>
		<div class="profile">
			<a href="/" class="profile-link">
				<img src="https://github.com/fordtom.png" alt="Tom Ford" />
			</a>
			<h1>Tom Ford</h1>
		</div>
		<nav>
			<a href="/" class:active={isActive('/')}>
				<span>About</span>
			</a>
			<a href="/experience" class:active={isActive('/experience')}>
				<span>Experience</span>
			</a>
			<a href="/projects" class:active={isActive('/projects')}>
				<span>Projects</span>
			</a>
		</nav>
	</header>

	<main>
		{#key $page.url.pathname}
			<div in:fly={{ y: 10, duration: 400, delay: 200 }} out:fade={{ duration: 200 }}>
				{@render children()}
			</div>
		{/key}
	</main>

	<footer>
		<div class="social-links">
			<a href="mailto:t@tomrford.com">
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
					/>
				</svg>
				Mail
			</a>
			<a href="https://github.com/fordtom">
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
					/>
				</svg>
				GitHub
			</a>
			<a href="https://www.linkedin.com/in/tomrford/">
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
					/>
				</svg>
				LinkedIn
			</a>
		</div>
		<p class="copyright">© 2025 Tom Ford</p>
	</footer>
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
		line-height: 1.6;
		color: #000;
		background: #fff;
		padding: 40px 20px;
	}

	.container {
		max-width: 700px;
		margin: 0 auto;
	}

	header {
		margin-bottom: 60px;
	}

	.profile {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-bottom: 30px;
	}

	.profile-link {
		display: block;
		border-radius: 50%;
		transition: transform 0.3s ease;
	}

	.profile-link:hover {
		transform: scale(1.05);
	}

	.profile img {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		display: block;
	}

	.profile h1 {
		font-size: 2em;
		font-weight: 600;
	}

	nav {
		font-size: 1.1em;
	}

	nav a {
		color: #000;
		text-decoration: none;
		margin-right: 15px;
		position: relative;
		display: inline-block;
		padding-bottom: 2px;
	}

	nav a span {
		position: relative;
		z-index: 1;
	}

	nav a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 1px;
		background: currentColor;
		transition: width 0.3s ease;
	}

	nav a:hover::after {
		width: 100%;
	}

	nav a.active {
		font-weight: 600;
	}

	nav a.active::after {
		width: 100%;
		height: 2px;
	}

	footer {
		margin-top: 80px;
		padding-top: 40px;
		border-top: 1px solid #ddd;
	}

	.social-links {
		display: flex;
		gap: 15px;
		margin-bottom: 20px;
	}

	.social-links a {
		display: flex;
		align-items: center;
		gap: 6px;
		color: #000;
		text-decoration: none;
	}

	.social-links a:hover {
		text-decoration: underline;
	}

	.social-links svg {
		width: 16px;
		height: 16px;
		fill: currentColor;
	}

	.copyright {
		color: #666;
		font-size: 0.9em;
	}

	@media (prefers-color-scheme: dark) {
		:global(body) {
			background: #000;
			color: #fff;
		}

		nav a,
		.social-links a {
			color: #fff;
		}

		footer {
			border-top-color: #333;
		}
	}
</style>
