<script lang="ts">
	import projectData from '../assets/projects.json';
</script>

<article class="page-container">
	{#each projectData as year}
		<div class="box">
			<section class="section">
				<h1 class="title is-1">{year.year}</h1>
				{#each year.projects as project}
					<div class="columns">
						<div class="column {project.media ? 'is-two-thirds' : 'is-full'}">
							<h2 class="title is-2">{project.project}</h2>
							<p class="subtitle is-4">{project.description}</p>
							<p class="bottom-text-line">
								{project.footer.text}<a
									href={project.footer.link.url}
									target="_blank"
									rel="noopener noreferrer">{project.footer.link.title}</a
								>
							</p>
						</div>
						{#if project.media}
							<div class="column">
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
									<figure class="image">
										<img src={project.media} alt="preview of how {project.project} looks" />
									</figure>
								{/if}
							</div>
						{/if}
					</div>
				{/each}
			</section>
		</div>
	{/each}
</article>
