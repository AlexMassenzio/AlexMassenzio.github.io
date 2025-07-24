<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	inject({ mode: dev ? 'development' : 'production' });
	let now = new Date();
</script>

<div
	class="flex min-h-dvh flex-col bg-monochrome-100 font-body text-monochrome-900 dark:bg-monochrome-900 dark:text-monochrome-100"
>
	<main class="flex flex-grow flex-col items-center justify-center">
		{@render children?.()}
	</main>
	<footer class="w-full py-3 text-center">
		<div class="text-center">
			<p>Copyright © 2016-{now.getFullYear()} Alex Massenzio</p>
		</div>
	</footer>
</div>
