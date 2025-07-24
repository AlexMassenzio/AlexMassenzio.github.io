<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<div class="mx-2 pt-8">
	<h1 class="text-center text-xl sm:text-2xl">Alex's Hoboken Pizza Ranking</h1>
	<table
		class="m-auto mt-4 w-fit table-auto border-separate border-spacing-0 rounded-lg border border-monochrome-600 text-left text-sm sm:text-lg dark:border-monochrome-100"
	>
		<thead>
			<tr>
				<th class="rounded-tl-lg border border-monochrome-600 p-2 dark:border-monochrome-500"
					>Rank</th
				>
				<th class="border border-monochrome-600 p-2 dark:border-monochrome-500">Name</th>
				<th class="border border-monochrome-600 p-2 dark:border-monochrome-500">Go-To Item</th>
				<th class="rounded-tr-lg border border-monochrome-600 p-2 dark:border-monochrome-500"
					>Info</th
				>
			</tr>
		</thead>
		<tbody>
			{#each data.pizza as pizzaPlace, i}
				<tr
					class={(i + 1 == 1 ? 'text-primary-400 dark:text-primary-300' : '') +
						(pizzaPlace.goto == 'TBD'
							? 'border-monochrome-600 italic dark:text-monochrome-500'
							: '')}
				>
					<td
						class="border p-2 {i == data.pizza.length - 1 ? 'rounded-bl-lg' : ''}
							 border-monochrome-600 dark:border-monochrome-500">{pizzaPlace.goto == 'TBD' ? 'TBD' : i + 1}</td
					>
					<td class="border border-monochrome-600 p-2 dark:border-monochrome-500"
						>{pizzaPlace.name}</td
					>
					<td class="border border-monochrome-600 p-2 dark:border-monochrome-500"
						>{pizzaPlace.goto}</td
					>
					<td
						class="border p-2 {i == data.pizza.length - 1 ? 'rounded-br-lg' : ''}
							 border-monochrome-600 dark:border-monochrome-500"
					>
						<Link href={pizzaPlace.link}>Link</Link>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
