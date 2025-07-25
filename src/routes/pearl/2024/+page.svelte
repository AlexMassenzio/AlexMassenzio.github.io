<script lang="ts">
	type Cocktail = {
		name: string;
		notes: string;
		ingredients: string;
	};
	const cocktailList: Cocktail[] = [
		{
			name: "Viper's Tea",
			notes: '🍵 ☁ 🌿',
			ingredients: 'Yerba Mate Infused Pisco, Egg White, Lemon, Simple Syrup, Ango Bitters'
		},
		{
			name: 'Mezcal Old Fashioned',
			notes: '🌶 🔥 🌫',
			ingredients: 'Mezcal, Acho Reyes, Agave, Ango Bitters'
		},
		{
			name: 'Hemingway Daiquiri',
			notes: '⛱ 🍋 🌊',
			ingredients: 'Rum, Grapefruit Juice, Marachino Liqueur, Lime'
		},
		{
			name: 'Paloma',
			notes: '🌵 🍹 🍋',
			ingredients: 'Tequila Blanco, Grapefruit Juice, Lime, Agave, Soda Water'
		},
		{
			name: 'Mint Julep',
			notes: '❄ 🌿 🥃',
			ingredients: 'Bourbon, Mint Infused Simple, Lots of Ice'
		}
	];
</script>

<h1 class="body-font text-center text-4xl font-bold">Pearl 2024 Cocktails</h1>

<div class="body-font mx-4">
	{#each cocktailList as cocktail (cocktail.name)}
		<div class="mt-4 flex flex-row items-end gap-2">
			<h2 class="text-2xl font-semibold underline">{cocktail.name}</h2>
			<h3 class="text-lg">{cocktail.notes}</h3>
		</div>
		<h4 class="text-md mt-2 text-monochrome-900 dark:text-monochrome-200">
			{cocktail.ingredients}
		</h4>
	{/each}
</div>

<p class="body-font mt-4 text-monochrome-800 dark:text-monochrome-300">
	...or feel free to ask for anything else!
</p>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&display=swap');
	.body-font {
		font-family: 'Edu AU VIC WA NT Hand', cursive;
	}
</style>
