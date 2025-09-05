<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { onNavigate } from '$app/navigation';
	import { inject } from '@vercel/analytics';
	import { Canvas } from '@threlte/core';
	import { Studio } from '@threlte/studio';
	import Scene from '$lib/components/Scene.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	inject({ mode: dev ? 'development' : 'production' });

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="grid h-dvh w-dvw grid-cols-4">
	<div class="h-full w-full bg-primary-400">
		<nav class="mx-auto flex h-full w-fit flex-col justify-center text-start">
			<a class="text-6xl tracking-wider" href="/">Home</a>
			<a class="text-6xl tracking-wider" href="/about">About</a>
			<a class="text-6xl tracking-wider" href="/contact">Contact</a>
			<a class="text-6xl tracking-wider" href="/blog">Blog</a>
		</nav>
	</div>
	<main class="relative col-span-3 h-full w-full">
		<div class="absolute inset-0 h-full w-full">
			<Canvas>
				<Studio>
					<Scene />
				</Studio>
			</Canvas>
		</div>
		<div class="relative -z-10 h-full w-full">
			{@render children?.()}
		</div>
	</main>
</div>
