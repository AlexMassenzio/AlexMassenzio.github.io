<nav class="navbar is-transparent">
    <div class="navbar-burger" data-target="navItems">
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div id="navItems" class="navbar-menu nbm">
        <div class="navbar-start">
            <a class="navbar-item" href="#home">Home</a>
            <a class="navbar-item" href="#projects">Projects</a>
            <a class="navbar-item" href="#contact">Contact</a>
        </div>
    </div>
</nav>

<style lang="scss">
    .navbar {
        &.is-transparent{
            background-color: rgba(0,0,0,0.25);
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