<script lang="ts">
	import { browser } from '$app/environment';

	let difficulty = 19;
	let score = 100000;
	if (browser) {
		difficulty = +(window.localStorage.getItem('difficulty') ?? difficulty);
		score = +(window.localStorage.getItem('score') ?? score);
	}

	let rankingPoints: number;
	$: {
		rankingPoints = Math.floor((+score * Math.pow(+difficulty, 2)) / 1000);
		if (browser && difficulty && score) {
			window.localStorage.setItem('difficulty', difficulty.toString());
			window.localStorage.setItem('score', score.toString());
		}
	}
</script>

<div
	class="fixed w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
>
	<h1 class="text-2xl text-center">SMX Ranking Points Calculator</h1>

	<div class="mt-4 flex flex-row justify-center">
		<label>
			<span>Difficulty</span>
			<input
				type="number"
				class="w-10 ml-1 bg-monochrome-900 text-monochrome-100 border-monochrome-100 outline outline-1 outline-offset-2 rounded-sm"
				bind:value={difficulty}
			/>
		</label>

		<label class="ml-4">
			<span>Score</span>
			<input
				type="number"
				class="w-20 ml-1 bg-monochrome-900 text-monochrome-100 border-monochrome-100 outline outline-1 outline-offset-2 rounded-sm"
				bind:value={score}
			/>
		</label>
	</div>

	<h2
		class="mt-5 p-1 text-xl font-bold text-primary-300 outline outline-offset-2 outline-4 rounded-md"
	>
		{rankingPoints.toLocaleString(undefined)}
	</h2>
</div>
