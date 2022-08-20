<script lang="ts">
    export let navLoc : string = "home";

    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Add a click event on each of them
        navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const target_id = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                target_id.classList.toggle('is-active');

            });
        });
    });
</script>

<nav class="navbar is-transparent">
    <div class="navbar-brand">
        <a class="navbar-item has-text-light" href="#home" on:click={() => {navLoc = "home"}}>Alex Massenzio</a>

        <div class="navbar-burger" data-target="navItems">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    <div id="navItems" class="navbar-menu nbm">
        <div class="navbar-start">
            <a class="navbar-item has-text-light" href="#projects" on:click={() => {navLoc = "projects"}}>Projects</a>
            <a class="navbar-item has-text-light" href="#contact" on:click={() => {navLoc = "contact"}}>Contact</a>
        </div>
    </div>
</nav>

<style lang="scss">
    .navbar {
        &.is-transparent{
            background-color: rgba($color: #070707, $alpha: 0.4);
        }
    }
    
    .navbar-item {
        padding-left: 2rem;
        padding-right: 2rem;
    }
</style>