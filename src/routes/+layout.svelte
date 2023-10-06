<script>
	import '../app.css';
	let now = new Date();
</script>

<div
	class="relative min-h-[100dvh] box-border bg-monochrome-100 dark:bg-monochrome-900 text-monochrome-900 dark:text-monochrome-100 font-body"
>
	<main class="m-0 mx-auto pb-8">
		<slot />
	</main>
	<footer class="absolute bottom-0 w-full text-center">
		<p>© Alex Massenzio 2016-{now.getFullYear()}</p>
	</footer>
</div>
