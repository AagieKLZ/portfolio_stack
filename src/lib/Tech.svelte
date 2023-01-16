<script>
    export let lang
    export let ind
</script>

<div class="lang-container" style="--lang-ind: {ind / 10 + 0.3}s">
    
    <img src={`src/assets/languages/${lang.toLowerCase()}.svg`} alt="" class="langimg">
    <span class="lang">{lang}</span>
</div>

<style>
    @keyframes anim-lang{
        from{
            transform: translateX(-100%)
        }
        to {
            transform: translateX(0);
        }
    }

    .lang-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateX(var(--lang-ind));
        animation: anim-lang var(--lang-ind) linear 0s 1 forwards;
    }

    


</style>