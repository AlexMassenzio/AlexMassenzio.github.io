<script lang="ts">
	import projectData from '$lib/data/projects.json';
</script>

<article class="m-8 mb-0">
	{#each projectData as year}
		<section>
			<h1 class="text-3xl text-center mb-4">{year.year}</h1>
			<div class="flex flex-col items-center w-full gap-4 md:gap-6 mb-8">
				{#each year.projects as project}
					<div
						class="border-2 border-monochrome-500 md:w-1/2 bg-monochrome-800 h-fit rounded-xl flex flex-col p-2"
					>
						{#if project.media}
							{#if !project.media.includes('gfycat')}
								<figure class="mb-4">
									<img
										src={project.media}
										class="w-full border border-monochrome-500 border-separate h-32 md:h-48 object-cover rounded-lg"
										alt="preview of how '{project.project}' looks"
									/>
								</figure>
							{/if}
						{/if}
						<div class="grid grid-cols-3 items-end mb-2">
							<h2 class="col-span-2 text-2xl">{project.project}</h2>
							<a
								href={project.footer.link.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-info-500 dark:text-info-400 text-xl decoration-1 underline truncate text-end"
								>{project.footer.link.title}
							</a>
						</div>
						<p class="mb-2">{project.description}</p>
						<p>
							{project.footer.text}
							<a
								href={project.footer.link.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-info-500 dark:text-info-400 decoration-1 underline truncate text-end"
								>{project.footer.link.title}
							</a>
						</p>
					</div>
				{/each}
			</div>
		</section>
	{/each}
</article>
