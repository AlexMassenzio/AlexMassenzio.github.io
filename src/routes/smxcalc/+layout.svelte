<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<svelte:head>
	<title>SMX Calc</title>
	<link rel="icon" href="/smx.jpg" />
	<meta name="description" content="Find out your score's ranking points!" />
</svelte:head>

{@render children?.()}
