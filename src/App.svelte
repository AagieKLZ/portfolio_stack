<script>
    import Navbar from "./lib/Navbar.svelte";
    import Techtype from "./lib/Techtype.svelte";
    import Triangle from "./lib/Triangle.svelte"
    

</script>

<Navbar />
<Triangle />
<div class="techs">
  <Techtype tech="Languages" />
  <Techtype tech="Frontend" /> 
  <Techtype tech="Backend" />   
  <Techtype tech="Databases" /> 
  <Techtype tech="Others" />
</div>



<style>
.techs{
  display: flex;
  flex-direction: row;
  width: 90%;
  left: 5%;
  position: absolute;
  justify-content: space-around;
  align-items: baseline;
  top: 25vh;
}
</style>
