<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="pt-8 mx-2">
	<h1 class="text-center text-xl sm:text-2xl">Alex's Hoboken Pizza Ranking</h1>
	<table
		class="mt-4 w-fit m-auto table-auto text-sm sm:text-lg text-left border-separate border-spacing-0 border rounded-lg border-monochrome-600 dark:border-monochrome-100"
	>
		<thead>
			<tr>
				<th class="p-2 border rounded-tl-lg border-monochrome-600 dark:border-monochrome-500"
					>Rank</th
				>
				<th class="p-2 border border-monochrome-600 dark:border-monochrome-500">Name</th>
				<th class="p-2 border border-monochrome-600 dark:border-monochrome-500">Go-To Item</th>
				<th class="p-2 border rounded-tr-lg border-monochrome-600 dark:border-monochrome-500"
					>Info</th
				>
			</tr>
		</thead>
		<tbody>
			{#each data.pizza as pizzaPlace, i}
				<tr
					class={(i + 1 == 1 ? 'text-primary-400 dark:text-primary-300' : '') +
						(pizzaPlace.goto == 'TBD'
							? 'border-monochrome-600 dark:text-monochrome-500 italic'
							: '')}
				>
					<td
						class="p-2 border {i == data.pizza.length - 1 ? 'rounded-bl-lg' : ''}
							 border-monochrome-600 dark:border-monochrome-500">{pizzaPlace.goto == 'TBD' ? 'TBD' : i + 1}</td
					>
					<td class="p-2 border border-monochrome-600 dark:border-monochrome-500"
						>{pizzaPlace.name}</td
					>
					<td class="p-2 border border-monochrome-600 dark:border-monochrome-500"
						>{pizzaPlace.goto}</td
					>
					<td
						class="p-2 border {i == data.pizza.length - 1 ? 'rounded-br-lg' : ''}
							 border-monochrome-600 dark:border-monochrome-500"
					>
						<Link href={pizzaPlace.link}>Link</Link>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
