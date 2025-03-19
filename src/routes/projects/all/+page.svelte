<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<main class="p-8">
	<h1 class="text-4xl text-center">Projects</h1>
	{#each projects as year}
		<section class="pt-6">
			<h1 class="text-3xl text-center">{year.year}</h1>
			<div class="flex flex-col items-center w-full gap-6 pt-6">
				{#each year.projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</section>
	{/each}
</main>
