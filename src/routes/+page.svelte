<script>
	import Icon from '@iconify/svelte';

	let titleHover = false;
</script>

<h1
	class="text-primary-500 text-5xl hover:text-monochrome-900 dark:hover:text-monochrome-100 cursor-pointer transition-colors"
	on:mouseenter={() => (titleHover = true)}
	on:mouseleave={() => (titleHover = false)}
>
	alexmassenzio
</h1>

<Icon
	icon="tabler:arrow-down"
	width={48}
	class="mt-4 transition-colors hidden md:block {titleHover
		? 'text-monochrome-900 dark:text-monochrome-100'
		: 'text-monochrome-100 dark:text-monochrome-900'}"
/>
