<script lang="ts">
	import projectData from '$lib/data/projects.json';
</script>

<article class="m-8">
	{#each projectData as year}
		<section class="m-2">
			<h1 class="text-2xl underline">{year.year}</h1>
			{#each year.projects as project}
				<div class="my-2 p-2 border-2 rounded-sm flex flex-col sm:flex-row">
					<div>
						<h2 class="text-xl">{project.project}</h2>
						<p class="mt-2">{project.description}</p>
						<p class="mt-1">
							{project.footer.text}<a
								href={project.footer.link.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-info-500 dark:text-info-400 underline"
								>{project.footer.link.title}
							</a>
						</p>
					</div>
					{#if project.media}
						<div class="mt-2 sm:mt-0 sm:ml-[5%]">
							{#if project.media.includes('gfycat')}
								<div style="position:relative; padding-bottom:calc(56.25% + 44px)">
									<iframe
										title="gfycat"
										src={project.media}
										frameborder="0"
										scrolling="no"
										width="100%"
										height="100%"
										style="position:absolute;top:0;left:0;"
										allowfullscreen
									/>
								</div>
							{:else}
								<figure>
									<img
										src={project.media}
										class="max-h-96"
										alt="preview of how '{project.project}' looks"
									/>
								</figure>
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</section>
	{/each}
</article>
