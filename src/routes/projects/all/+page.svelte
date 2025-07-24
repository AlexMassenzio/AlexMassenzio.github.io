<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<main class="p-8">
	<h1 class="text-center text-4xl">Projects</h1>
	{#each projects as year}
		<section class="pt-6">
			<h1 class="text-center text-3xl">{year.year}</h1>
			<div class="flex w-full flex-col items-center gap-6 pt-6">
				{#each year.projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</section>
	{/each}
</main>
