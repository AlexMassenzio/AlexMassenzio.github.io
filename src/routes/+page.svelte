<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Icon from '@iconify/svelte';

	let titleHover = false;

	function scrollToAnchor(event: MouseEvent) {
		event.preventDefault();
		const anchorId = 'main-content';
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor?.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<div class="h-dvh flex flex-col items-center justify-center">
	<button
		class="text-primary-500 text-5xl hover:text-monochrome-900 dark:hover:text-monochrome-100 cursor-pointer transition-colors"
		on:mouseenter={() => (titleHover = true)}
		on:mouseleave={() => (titleHover = false)}
		on:click={scrollToAnchor}
	>
		alexmassenzio
	</button>

	<Icon
		icon="tabler:layout-bottombar-expand"
		width={48}
		class="mt-4 transition-colors hidden md:block {titleHover
			? 'text-monochrome-900 dark:text-monochrome-100'
			: 'text-monochrome-100 dark:text-monochrome-900'}"
	/>
</div>

<div class="h-dvh flex flex-col items-center justify-center min-h-dvh" id="main-content">
	<ul role="list" class="marker:text-monochrome-900 dark:marker:text-monochrome-100 list-disc">
		<li><Link href="/projects">projects</Link></li>
		<li><Link href="/pizzarank">pizzarank</Link></li>
	</ul>
</div>
