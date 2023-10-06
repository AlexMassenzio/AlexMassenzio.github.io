<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="pt-8">
	<h1 class="text-center text-2xl">Alex's Hoboken Pizza Ranking</h1>
	<table
		class="mt-4 w-fit m-auto table-auto text-lg text-left border-collapse border-2 border-monochrome-900 dark:border-monochrome-100"
	>
		<thead>
			<tr>
				<th class="p-2 border border-monochrome-900 dark:border-monochrome-100">Rank</th>
				<th class="p-2 border border-monochrome-900 dark:border-monochrome-100">Name</th>
				<th class="p-2 border border-monochrome-900 dark:border-monochrome-100">Go-To Item</th>
				<th class="p-2 border border-monochrome-900 dark:border-monochrome-100">Info</th>
			</tr>
		</thead>
		<tbody>
			{#each data.pizza as pizzaPlace, i}
				<tr class={i + 1 == 1 ? 'dark:text-primary-300' : ''}>
					<td class="p-2 border border-monochrome-900 dark:border-monochrome-100">{i + 1}</td>
					<td class="p-2 border border-monochrome-900 dark:border-monochrome-100"
						>{pizzaPlace.name}</td
					>
					<td class="p-2 border border-monochrome-900 dark:border-monochrome-100"
						>{pizzaPlace.goto}</td
					>
					<td class="p-2 border border-monochrome-900 dark:border-monochrome-100 text-info-400">
						<a href={pizzaPlace.link} target="_blank">Link</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
