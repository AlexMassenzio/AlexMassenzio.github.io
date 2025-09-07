<script lang="ts">
	import { T } from '@threlte/core';
	import { Sky, CameraControls, type CameraControlsRef } from '@threlte/extras';
	import Water from './water.svelte';
	import { Tween } from 'svelte/motion';

	let camControls = $state<CameraControlsRef>();

	$effect.pre(() => {
		camControls?.moveTo(0, 3.6, 11, true);
	});

	const progress = new Tween(-20, { duration: 8000 });
	$effect(() => {
		progress.target = 4;
	});
</script>

<Sky elevation={progress.current} />
<Water />

<T.PerspectiveCamera
	makeDefault
	position={[0, 3.6, 11]}
	rotation={[-0.1, 0, 0]}
	scale={[1, 1, 1]}
	fov={50.75}
>
	<CameraControls bind:ref={camControls} enabled={false} />
</T.PerspectiveCamera>
