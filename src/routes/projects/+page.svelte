<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import { projects } from '$lib/data/projects';
	import type { Project } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let highlightedProjects: Project[] = [];
	for (let i = 0; i < projects.length; i++) {
		const element = projects[i];
		element.projects.forEach((project) => {
			if (project.priority >= 0) {
				highlightedProjects.push(project);
			}
		});
	}

	highlightedProjects.sort((a, b) => {
		return a.priority - b.priority;
	});
</script>

<main class="p-8">
	<h1 class="text-4xl text-center">Projects</h1>
	<div class="flex flex-col items-center w-full gap-6 pt-6">
		{#each highlightedProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
	<p class="pt-6 italic text-center">
		Want to see more? View <Link href="/projects/all">all projects</Link>!
	</p>
</main>
