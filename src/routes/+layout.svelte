<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
	let now = new Date();
</script>

<div
	class="flex flex-col min-h-dvh bg-monochrome-100 dark:bg-monochrome-900 text-monochrome-900 dark:text-monochrome-100 font-body"
>
	<main class="flex items-center justify-center flex-col flex-grow">
		<slot />
	</main>
	<footer class="py-3 w-full text-center">
		<div class="text-center">
			<p>Copyright © 2016-{now.getFullYear()} Alex Massenzio</p>
		</div>
	</footer>
</div>
