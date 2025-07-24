<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import Link from '$lib/components/Link.svelte';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<article
	class="flex h-fit flex-col rounded-xl bg-monochrome-800 p-4 md:w-5/6 lg:w-2/3 xl:w-1/2 2xl:w-1/3"
>
	{#if project.media}
		{#if !project.media.includes('gfycat')}
			<figure class="mb-2">
				<img
					src={project.media}
					class="h-32 w-full border-separate rounded-lg border border-monochrome-500 object-cover md:h-48"
					alt="preview of how '{project.name}' looks"
				/>
			</figure>
		{/if}
	{/if}
	<div class="grid grid-cols-3 items-end">
		<h2 class="col-span-2 text-2xl">{project.name}</h2>
		<Link
			href={project.footer.link.url}
			target="_blank"
			rel="noopener noreferrer"
			class="truncate text-end text-xl"
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
