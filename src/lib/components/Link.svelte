<script lang="ts">
	interface Props {
		href: string;
		target?: '_self' | '_blank' | '_parent' | '_top';
		rel?: string;
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let {
		href,
		target = href.startsWith('http') ? '_blank' : '_self',
		rel = '',
		children,
		...rest
	}: Props = $props();
</script>

<a
	{href}
	class="text-info-500 underline decoration-1 dark:text-info-400 {rest.class || ''}"
	{target}
	{rel}
>
	{@render children?.()}
</a>
