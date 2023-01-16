<script>
    import { openComponents } from "../utils/store";

    function handleTechs(e){
      console.log("click")
      openComponents.set({
        "Languages": false,
        "Frontend": false,
        "Backend": false,
        "Databases": false,
        "Others": false
      })
    }

</script>

<div class="triangle" on:mousedown={handleTechs}></div>

<style>

.triangle{
    width: 0;
    height: 0;
    border-left: 250vw solid #222C2C;
    border-right: 100vw solid transparent;
    border-bottom: 100vh solid transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 90%;
    transform: translateY(100%);
    animation: show-triangle 0.4s linear 0s 1 forwards;
}
</style>