<nav>
    <div class="title">AAGIE.DEV</div>
    <div class="menu">
        <a href="pages/about.html">About Me</a>
        <a href="/">Portfolio</a>
        <a href="/">Contact</a>
    </div>
</nav>

<style>
@import url("../css/animations.css");

nav {
    width: 90%;
    left: 5%;
    height: 5vh;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid white;
    line-height: 5vh;
    align-items: center;
    user-select: none;
    color: white;
    z-index: 2;
    transform: translateY(-100px);
    animation: show-nav 0.3s linear 0s 1 forwards;
}



.title {
    font-family: gruppo;
    font-size: 36px;
    letter-spacing: 0.2em;
    padding-left: 1em;
    opacity: 0;
    color: white;
    text-decoration: none;
    transform: translateX(-100px);
    animation: show-title 0.5s linear 0s 1 forwards;
}

.title:hover {
    font-weight: bold;
}

.menu {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: gruppo;
    font-size: 24px;
}

.menu>a {
    opacity: 0;
    transform: translateX(100px);
}

.menu>a:nth-child(1) {
    animation: show-menu 0.5s linear 0s 1 forwards;
}

.menu>a:nth-child(2) {
    animation: show-menu 0.7s linear 0.1s 1 forwards;
}

.menu>a:nth-child(3) {
    animation: show-menu 0.9s linear 0.2s 1 forwards;
}

.menu>a {
    color: white;
    position: relative;
    text-decoration: none;
    cursor: pointer;
}

.menu>a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 4px;
    left: 0;
    background-color: white;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

.menu>a:hover::before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
}
</style>