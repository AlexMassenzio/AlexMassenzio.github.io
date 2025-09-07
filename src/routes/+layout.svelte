<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import { onNavigate } from '$app/navigation';
	import { inject } from '@vercel/analytics';
	import { Canvas } from '@threlte/core';
	// import { Studio } from '@threlte/studio';
	import Scene from '$lib/components/Scene.svelte';
	import type { AsciiEffectOptions } from 'three/examples/jsm/Addons.js';
	import { AsciiRenderer } from '@threlte/extras';
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

	let fgColor = $state('#8158A7'); // softened foreground color
	let bgColor = $state('#181825'); // softened background color
	const defaultCharacters = ' .:-+*=%@#';
	let characters = $state(defaultCharacters);
	let alpha = $state(true);
	let block = $state(false);
	let color = $state(false);
	let invert = $state(true);
	let resolution = $state(0.1);
	let scale = $state(1);
	const options = $derived<AsciiEffectOptions>({
		alpha,
		block,
		color,
		invert,
		resolution,
		scale
	});
</script>

<div class="grid h-dvh w-dvw grid-cols-4">
	<div class="relative col-span-1 h-full w-full">
		<div class="absolute inset-0 h-full w-full">
			<Canvas>
				<AsciiRenderer {bgColor} {characters} {fgColor} {options} />
				<Scene />
			</Canvas>
		</div>
		<nav
			class="nav-font relative z-10 mx-auto flex h-full w-fit flex-col justify-center text-start text-error-50"
		>
			<a class="relative w-fit py-2 text-6xl tracking-wider" href="/">Home</a>
			<a class="relative w-fit py-2 text-6xl tracking-wider" href="/projects">Projects</a>
			<a class="relative w-fit py-2 text-6xl tracking-wider" href="/contact">Contact</a>
			<a class="relative w-fit py-2 text-6xl tracking-wider" href="/blog">Blog</a>
		</nav>
	</div>
	<main class="relative col-span-3 h-full w-full">
		<div class="absolute inset-0 h-full w-full">
			<Canvas>
				<!-- <Studio> -->
				<Scene />
				<!-- </Studio> -->
			</Canvas>
		</div>
		<div class="relative z-10 h-dvh w-full overflow-y-auto">
			{@render children?.()}
		</div>
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
	.nav-font {
		font-family: 'Michroma';
	}
	a::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: #fff;
		bottom: 0;
		left: 0;
		transform: scaleX(0);
		transform-origin: bottom left;
		transition: transform 0.3s linear;
	}
	a:hover::after {
		transform-origin: bottom left;
		transform: scaleX(1);
	}
</style>
