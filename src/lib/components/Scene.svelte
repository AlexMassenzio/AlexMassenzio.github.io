<script lang="ts">
	import { T } from '@threlte/core';
	import { Sky } from '@threlte/extras';
	import Water from './water.svelte';
	import { Tween } from 'svelte/motion';

	const progress = new Tween(-20, { duration: 8000 });
	$effect(() => {
		progress.target = 4;
	});
</script>

<Sky elevation={progress.current} />

<T.PerspectiveCamera
	makeDefault
	position={[0, 3.6, 11]}
	rotation={[-0.1, 0, 0]}
	scale={[1, 1, 1]}
	fov={50.75}
/>
<Water />
