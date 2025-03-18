<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import projectData from '$lib/data/projects';
</script>

<main class="p-8">
	<h1 class="text-4xl text-center">Projects</h1>
	{#each projectData as year}
		<section class="pt-6">
			<h1 class="text-3xl text-center">{year.year}</h1>
			<div class="flex flex-col items-center w-full gap-6 pt-6">
				{#each year.projects as project}
					<article class="flex flex-col p-4 md:w-1/3 bg-monochrome-800 h-fit rounded-xl">
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
				{/each}
			</div>
		</section>
	{/each}
</main>
