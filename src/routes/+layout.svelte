<script>
	import '../app.css';
	let now = new Date();
</script>

<div
	class="bg-monochrome-100 dark:bg-monochrome-900 text-monochrome-900 dark:text-monochrome-100 font-body"
>
	<slot />
	<footer class="fixed bottom-0 w-full text-center">
		<p>© Alex Massenzio 2016-{now.getFullYear()}</p>
	</footer>
</div>
