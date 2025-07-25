<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<svelte:head>
	<title>Pearl St. Cocktails</title>
	<link rel="icon" href="/cocktail.png" />
	<meta name="description" content="Pearl St. Cocktails" />
</svelte:head>

{@render children?.()}
