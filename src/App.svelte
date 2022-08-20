<script lang="ts">
import { fly } from 'svelte/transition'
import BGVid from "./lib/BGVid.svelte";
import Contact from './lib/Contact.svelte';
import Home from './lib/Home.svelte';
import Navbar from "./lib/Navbar.svelte";
import Projects from './lib/Projects.svelte';

if(window.location.hash == "") {
  window.location.hash = "home";
}

let navLocation : string = window.location.hash.substring(1);
const ANIMATION_DURATION = 250;
</script>

<Navbar bind:navLoc={navLocation}/>

{#if navLocation == "home"}
  <div in:fly="{{x:400, duration: ANIMATION_DURATION, delay:ANIMATION_DURATION}}" out:fly="{{x:ANIMATION_DURATION, duration: ANIMATION_DURATION}}">
    <Home/>
  </div>
{:else if navLocation == "projects"}
  <div in:fly="{{x:400, duration: ANIMATION_DURATION, delay:ANIMATION_DURATION}}" out:fly="{{x:ANIMATION_DURATION, duration: ANIMATION_DURATION}}">
    <Projects/>
  </div>
{:else if navLocation == "contact"}
  <div in:fly="{{x:400, duration: ANIMATION_DURATION, delay:ANIMATION_DURATION}}" out:fly="{{x:ANIMATION_DURATION, duration: ANIMATION_DURATION}}">
    <Contact/>
  </div>
{/if}

<BGVid/>

<footer class="footer">
  <div class="content has-text-centered">
    <h3 class="title is-3">
      Made by Alex Massenzio
    </h3>
    <h4 class="title is-4">Made with:</h4>

    <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
      <img src="https://raw.githubusercontent.com/sveltejs/branding/c4dfca6743572087a6aef0e109ffe3d95596e86a/svelte-horizontal.svg" alt="Made with Bulma" class="badge"/>
    </a>
    <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">
      <img src="https://bulma.io/assets/Bulma%20Logo.svg" alt="Made with Bulma" class="badge"/>
    </a>
  </div>
</footer>

<style>
    .badge {
      width: 192px;
    }
</style>