<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';
	import { fade, fly } from 'svelte/transition';

	const { children } = $props();

	const isActive = (path: string) => {
		if (path === '/') return $page.url.pathname === '/';
		return $page.url.pathname === path || $page.url.pathname.startsWith(path + '/');
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" as="image" href="https://github.com/fordtom.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@300&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="mx-auto max-w-[700px]">
	<header class="mb-[60px]" in:fade={{ duration: 400 }}>
		<div class="mb-[30px] flex items-center gap-5">
			<a
				href="/"
				class="block rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
			>
				<img
					src="https://github.com/fordtom.png"
					alt="Tom Ford"
					class="block h-[120px] w-[120px] rounded-full"
				/>
			</a>
			<h1 class="text-[2em] font-semibold">Tom Ford</h1>
		</div>
		<nav class="text-[1.1em]">
			<a href="/" class="nav-link" class:active={isActive('/')}>
				<span>About</span>
			</a>
			<a href="/experience" class="nav-link" class:active={isActive('/experience')}>
				<span>Experience</span>
			</a>
			<a href="/projects" class="nav-link" class:active={isActive('/projects')}>
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
</div>
