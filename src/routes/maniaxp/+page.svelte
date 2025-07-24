<script lang="ts">
	import { run } from 'svelte/legacy';

	import { browser } from '$app/environment';
	import { getManiaxp } from '$lib/maniaxpUtil';

	let user = $state('');
	if (browser) {
		user = window.localStorage.getItem('user') ?? user;
	}

	let rankingPoints: number = $state(0);
	run(() => {
		if (browser && user) {
			window.localStorage.setItem('user', user.toString());
		}
	});

	async function calcManiaxp() {
		rankingPoints = await getManiaxp(user);
	}
</script>

<div
	class="fixed left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center"
>
	<h1 class="text-center text-2xl">SMX "ManiaXP" Calculator</h1>

	<div class="mt-4 flex flex-row justify-center">
		<label>
			<span>User</span>
			<input
				type="text"
				class="ml-1 w-20 rounded-sm border-monochrome-100 bg-monochrome-900 text-monochrome-100 outline outline-1 outline-offset-2"
				bind:value={user}
			/>
		</label>
	</div>

	<button
		class="text-md mt-5 rounded-md p-1 text-monochrome-300 outline outline-2 outline-offset-2"
		onclick={calcManiaxp}
	>
		Calculate
	</button>

	<h2
		class="mt-5 rounded-md p-1 text-xl font-bold text-primary-300 outline outline-4 outline-offset-2"
	>
		{rankingPoints.toLocaleString(undefined)}
	</h2>
</div>
