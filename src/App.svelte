<script lang="ts">
import { fly } from 'svelte/transition'
import BGVid from "./lib/BGVid.svelte";
import Contact from './lib/Contact.svelte';
import Home from './lib/Home.svelte';
import Navbar from "./lib/Navbar.svelte";
import Projects from './lib/Projects.svelte';

let navLoc:string;
const ANIMATION_DURATION = 250;
</script>

<Navbar bind:navLoc={navLoc}/>

{#if navLoc == "home"}
  <div in:fly="{{x:400, duration: ANIMATION_DURATION, delay:ANIMATION_DURATION}}" out:fly="{{x:ANIMATION_DURATION, duration: ANIMATION_DURATION}}">
    <Home/>
  </div>
{:else if navLoc == "projects"}
  <div in:fly="{{x:400, duration: ANIMATION_DURATION, delay:ANIMATION_DURATION}}" out:fly="{{x:ANIMATION_DURATION, duration: ANIMATION_DURATION}}">
    <Projects/>
  </div>
{:else if navLoc == "contact"}
  <div in:fly="{{x:400, duration: ANIMATION_DURATION, delay:ANIMATION_DURATION}}" out:fly="{{x:ANIMATION_DURATION, duration: ANIMATION_DURATION}}">
    <Contact/>
  </div>
{/if}

<!-- <div class="columns p-contain" transition:fly="{{delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5}}">
    <div class="column">
      First column
    </div>
    <div class="column">
      Second column
    </div>
    <div class="column">
      Third column
    </div>
</div>

<button class="button">{navLoc}</button> -->

<BGVid/>

<!-- <style>
    .p-contain {
        width: 300%;
    }
    .column {
        background-color: aqua;
        border-color: brown;
        border-style:dashed;
        border-width: 10px;
    }
</style> -->