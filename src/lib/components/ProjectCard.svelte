<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import Link from '$lib/components/Link.svelte';

	export let project: Project;
</script>

<article
	class="flex flex-col p-4 md:w-5/6 lg:w-2/3 xl:w-1/2 2xl:w-1/3 bg-monochrome-800 h-fit rounded-xl"
>
	{#if project.media}
		{#if !project.media.includes('gfycat')}
			<figure class="mb-2">
				<img
					src={project.media}
					class="object-cover w-full h-32 border border-separate rounded-lg border-monochrome-500 md:h-48"
					alt="preview of how '{project.name}' looks"
				/>
			</figure>
		{/if}
	{/if}
	<div class="grid items-end grid-cols-3">
		<h2 class="col-span-2 text-2xl">{project.name}</h2>
		<Link
			href={project.footer.link.url}
			target="_blank"
			rel="noopener noreferrer"
			class="text-xl truncate text-end"
			>{project.footer.link.title}
		</Link>
	</div>
	<p class="pt-0 text-lg italic">{project.role}</p>
	<p class="pt-4">{project.description}</p>
	<p class="pt-4 italic">
		{project.footer.info}
		<Link
			href={project.footer.link.url}
			target="_blank"
			rel="noopener noreferrer"
			class="truncate text-end"
			>{project.footer.link.title}
		</Link>
	</p>
</article>
