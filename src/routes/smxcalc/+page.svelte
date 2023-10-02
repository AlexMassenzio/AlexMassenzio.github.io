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
		if (browser) {
			window.localStorage.setItem('difficulty', difficulty.toString());
			window.localStorage.setItem('score', score.toString());
		}
	}
</script>

<div class="h-[100dvh] flex flex-col items-center justify-center">
	<h1 class="text-2xl">SMX Ranking Points Calculator</h1>

	<div class="mt-3 flex flex-row justify-center">
		<label>
			<span>Difficulty</span>
			<input
				type="number"
				class="w-10 text-monochrome-100 dark:text-monochrome-900"
				bind:value={difficulty}
			/>
		</label>

		<label class="pl-2">
			<span>Score</span>
			<input
				type="number"
				class="w-20 text-monochrome-100 dark:text-monochrome-900"
				bind:value={score}
			/>
		</label>
	</div>

	<h2
		class="mt-4 p-1 text-xl font-bold text-primary-300 outline outline-offset-2 outline-4 rounded-md"
	>
		{rankingPoints.toLocaleString(undefined)}
	</h2>
</div>
