<script lang="ts">
    import { fly } from 'svelte/transition'
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
    import arrowUpSvg from '../assets/arrow-up-circle-fill.svg';

    let scrollY;
    const buttonVisibleDistance : number = 100;

    const scrollToTop = () => {
        document.body.scrollIntoView();
    }

</script>

<svelte:window bind:scrollY={scrollY}/>

{#if scrollY > buttonVisibleDistance}
    <input on:click={scrollToTop} class="image is-64x64 toTop" alt="up arrow" type="image" src={arrowUpSvg} in:fly="{{y:100, duration:200}}" out:fly="{{y:100, duration:200}}">
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