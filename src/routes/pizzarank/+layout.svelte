<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<svelte:head>
	<title>Pizza Rank</title>
	<link rel="icon" href="/pizza.png" />
	<meta name="description" content="The definitive Hoboken pizza ranking :)" />
</svelte:head>

{@render children?.()}
