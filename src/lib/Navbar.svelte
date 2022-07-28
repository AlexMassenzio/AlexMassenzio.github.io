<script lang="ts">
    export let navLoc : string = "home";
</script>

<nav class="navbar is-transparent">
    <div class="navbar-burger" data-target="navItems">
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div id="navItems" class="navbar-menu nbm">
        <div class="navbar-start">
            <a class="navbar-item has-text-light" href="#home" on:click={() => {navLoc = "home"}}>Home</a>
            <a class="navbar-item has-text-light" href="#projects" on:click={() => {navLoc = "projects"}}>Projects</a>
            <a class="navbar-item has-text-light" href="#contact" on:click={() => {navLoc = "contact"}}>Contact</a>
        </div>
    </div>
</nav>

<style lang="scss">
    .navbar {
        &.is-transparent{
            background-color: rgba($color: #070707, $alpha: 0.4);
            //background: rgb(0,0,0);
            //background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.5) 100%);
        }
    }

    .navbar-start {
        padding-left: 2rem;
    }
    
    .navbar-item {
        padding-left: 2rem;
        padding-right: 2rem;
    }
</style>