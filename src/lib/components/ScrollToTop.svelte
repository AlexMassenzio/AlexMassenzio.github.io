<script lang="ts">
    import { fly } from "svelte/transition";
    import arrowUpSvg from "../../assets/arrow-up-circle-fill.svg";

    let scrollY;
    const buttonVisibleDistance: number = 100;
</script>

<svelte:window bind:scrollY />

{#if scrollY > buttonVisibleDistance}
    <input
        on:click={() => document.body.scrollIntoView()}
        class="image is-96x96 toTop"
        alt="up arrow"
        type="image"
        src={arrowUpSvg}
        in:fly={{ y: 100, duration: 200 }}
        out:fly={{ y: 100, duration: 200 }}
    />
{/if}

<style>
    .toTop {
        position: fixed;
        bottom: 0;
        right: 0;
        padding-right: 1em;
        padding-bottom: 1em;
    }
</style>
