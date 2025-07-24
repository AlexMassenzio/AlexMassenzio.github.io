<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Icon from '@iconify/svelte';

	let titleHover = $state(false);

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

<div class="flex h-dvh flex-col items-center justify-center">
	<button
		class="cursor-pointer text-5xl text-primary-500 transition-colors hover:text-monochrome-900 dark:hover:text-monochrome-100"
		onmouseenter={() => (titleHover = true)}
		onmouseleave={() => (titleHover = false)}
		onclick={scrollToAnchor}
	>
		alexmassenzio
	</button>

	<Icon
		icon="tabler:layout-bottombar-expand"
		width={48}
		class="mt-4 hidden transition-colors md:block {titleHover
			? 'text-monochrome-900 dark:text-monochrome-100'
			: 'text-monochrome-100 dark:text-monochrome-900'}"
	/>
</div>

<div class="flex h-dvh min-h-dvh flex-col items-center justify-center" id="main-content">
	<ul role="list" class="list-disc marker:text-monochrome-900 dark:marker:text-monochrome-100">
		<li><Link href="/projects">projects</Link></li>
		<li><Link href="/pizzarank">pizzarank</Link></li>
	</ul>
</div>
