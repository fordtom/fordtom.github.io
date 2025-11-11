<script lang="ts">
	const { data }: { data: { entries: { slug: string; title: string; date: string }[] } } = $props();
	// needed for mount detection to trigger CSS transitions
	// eslint-disable-next-line svelte/prefer-writable-derived
	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Writing - Tom Ford</title>
	<link rel="canonical" href="https://tomrford.com/writing" />
</svelte:head>

{#each data.entries as e, i (e.slug)}
	<div
		class="mb-[50px] translate-y-5 opacity-0 transition-all duration-500 ease-in-out"
		class:opacity-100={mounted}
		class:translate-y-0={mounted}
		style={`transition-delay: ${i * 100}ms`}
	>
		<h3 class="mb-1.5 text-[1.3em] font-semibold">
			<a href={`/writing/${e.slug}`} class="link-underline text-[#e2e2e3]">
				{e.title}
			</a>
		</h3>
		<p class="text-[0.95em] text-[#666]">{e.date}</p>
	</div>
{/each}
