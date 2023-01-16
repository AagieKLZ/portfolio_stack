<script>
    export let tech
    import languages from '../data/Languages.json'
    import { openComponents } from '../utils/store';
    import Tech from './Tech.svelte';
    
    let data = languages[tech]
    let showLangs;
    openComponents.subscribe(val => showLangs = val[tech])
    // @ts-ignore
    let paths = data.map(el => `../assets/languages/${el}.png`)
    function handleClick(e) {
        console.log(showLangs)
        openComponents.update(el => Object.assign({}, el, {[tech] : !showLangs}))
    }
</script>

<div class="techtype" on:mousedown={handleClick}>
    <div class:showLangs>
        <img src={`src/assets/${tech}.svg`} alt="">
        <span class="techtitle">{tech}</span>
    </div>
    <div class="techlist">
    {#if $openComponents[tech]}
        {#each data as lang, ind}
            <Tech lang={lang} ind={ind} />
        {/each}
    {/if}
    </div>
</div>

<style>
    .techtitle{
        font-weight: bold;
    }

    .showLangs{
        padding-bottom: 10px;
        border-bottom: 2px solid white;
    }

    .techlist{
        padding-top: 10px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        gap: 1em;
    }

    .techtype{
        position: relative;
        z-index: 7;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 100px;
        font-family: goldman;
    }

    .techtype:nth-child(5){
        transform: translateX(20px)
    }

    .techtype:hover{
        transform: scale(1.10);
    }
    

    
</style>