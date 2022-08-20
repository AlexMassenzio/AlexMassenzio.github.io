<script lang="ts">
    import projectData from '../assets/projects.json';
</script>

<div class="container">
    {#each projectData as year}
        <section class="section">
            <h1 class="title is-1">{year.year}</h1>
            {#each year.projects as project}
                <h2 class="title is-2">{project.project}</h2>
                <p class="subtitle is-4">{project.description}</p>
                <p>{project.footer.text}<a href={project.footer.link.url} target="_blank" rel="noopener noreferrer">{project.footer.link.title}</a></p>
            {/each}
        </section>
    {/each}
</div>