<script lang="ts">
	import { browser } from '$app/environment';
	import { getManiaxp } from '$lib/maniaxpUtil';

	let user = '';
	if (browser) {
		user = window.localStorage.getItem('user') ?? user;
	}

	let rankingPoints: number = 0;
	$: {
		if (browser && user) {
			window.localStorage.setItem('user', user.toString());
		}
	}

	async function calcManiaxp() {
		rankingPoints = await getManiaxp(user);
	}
</script>

<div
	class="fixed flex flex-col items-center justify-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
>
	<h1 class="text-2xl text-center">SMX "ManiaXP" Calculator</h1>

	<div class="flex flex-row justify-center mt-4">
		<label>
			<span>User</span>
			<input
				type="text"
				class="w-20 ml-1 rounded-sm bg-monochrome-900 text-monochrome-100 border-monochrome-100 outline outline-1 outline-offset-2"
				bind:value={user}
			/>
		</label>
	</div>

	<button
		class="p-1 mt-5 rounded-md text-md text-monochrome-300 outline outline-offset-2 outline-2"
		on:click={calcManiaxp}
	>
		Calculate
	</button>

	<h2
		class="p-1 mt-5 text-xl font-bold rounded-md text-primary-300 outline outline-offset-2 outline-4"
	>
		{rankingPoints.toLocaleString(undefined)}
	</h2>
</div>
