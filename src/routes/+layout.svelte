<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
	let now = new Date();
</script>

<div
	class="relative min-h-[100dvh] box-border bg-monochrome-100 dark:bg-monochrome-900 text-monochrome-900 dark:text-monochrome-100 font-body"
>
	<main class="m-0 mx-auto pb-12">
		<slot />
	</main>
	<footer class="absolute bottom-0 mb-3 w-full text-center">
		<div class="flex gap-x-2 justify-center">
			<a href="/" class="text-info-500 dark:text-info-400 underline">Home</a>
			<p>© Alex Massenzio 2016-{now.getFullYear()}</p>
			<a href="http://alexmassenzio.com/" class="text-info-500 dark:text-info-400 underline">Old</a>
		</div>
	</footer>
</div>
