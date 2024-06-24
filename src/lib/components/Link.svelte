<script lang="ts">
	export let href: string;
	export let target: '_self' | '_blank' | '_parent' | '_top' = href.startsWith('http')
		? '_blank'
		: '_self';
	export let rel = '';
</script>

<a
	{href}
	class="text-info-500 dark:text-info-400 decoration-1 underline {$$restProps.class || ''}"
	{target}
	{rel}
>
	<slot />
</a>
