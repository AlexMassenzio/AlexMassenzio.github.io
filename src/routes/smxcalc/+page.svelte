<script lang="ts">
	import { run } from 'svelte/legacy';

	import { browser } from '$app/environment';

	let difficulty = $state(19);
	let score = $state(100000);
	if (browser) {
		difficulty = +(window.localStorage.getItem('difficulty') ?? difficulty);
		score = +(window.localStorage.getItem('score') ?? score);
	}

	let rankingPoints: number = $state();
	run(() => {
		rankingPoints = Math.floor((+score * Math.pow(+difficulty, 2)) / 1000);
		if (browser && difficulty && score) {
			window.localStorage.setItem('difficulty', difficulty.toString());
			window.localStorage.setItem('score', score.toString());
		}
	});
</script>

<div
	class="fixed left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center"
>
	<h1 class="text-center text-2xl">SMX Ranking Points Calculator</h1>

	<div class="mt-4 flex flex-row justify-center">
		<label>
			<span>Difficulty</span>
			<input
				type="number"
				class="ml-1 w-10 rounded-sm border-monochrome-100 bg-monochrome-900 text-monochrome-100 outline outline-1 outline-offset-2"
				bind:value={difficulty}
			/>
		</label>

		<label class="ml-4">
			<span>Score</span>
			<input
				type="number"
				class="ml-1 w-20 rounded-sm border-monochrome-100 bg-monochrome-900 text-monochrome-100 outline outline-1 outline-offset-2"
				bind:value={score}
			/>
		</label>
	</div>

	<h2
		class="mt-5 rounded-md p-1 text-xl font-bold text-primary-300 outline outline-4 outline-offset-2"
	>
		{rankingPoints.toLocaleString(undefined)}
	</h2>
</div>
