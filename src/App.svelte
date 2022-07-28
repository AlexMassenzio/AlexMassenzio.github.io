<script lang="ts">
import { fly } from 'svelte/transition'
import BGVid from "./lib/BGVid.svelte";
import Navbar from "./lib/Navbar.svelte";

let navLoc:string;
</script>

<Navbar bind:navLoc={navLoc}/>

<div class="columns p-contain" transition:fly="{{delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5}}">
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

<button class="button">{navLoc}</button>

<BGVid/>

<style>
    .p-contain {
        width: 300%;
    }
    .column {
        background-color: aqua;
        border-color: brown;
        border-style:dashed;
        border-width: 10px;
    }
</style>