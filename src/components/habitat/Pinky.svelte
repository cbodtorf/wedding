<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte"; 
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
</script>

<ParalaxWrapper m={m} gridClass="wide">
  <Recolor slot="img" hex="#ba4020" recolorVar="pinky">
    <img class="pinky" src="assets/pinky.png" alt="pinky" />
  </Recolor>
  <span slot="text" class="text">Bubba</span>
</ParalaxWrapper>

<style>
  .text {
    font-size: var(--px32);
    color: var(--color-green);
    opacity: 0.8;
    position: absolute;
    bottom: 50%;
    padding-right: 40px;
  }
  .pinky {
    width: 240px;
    filter: var(--recolor-pinky);
    opacity: 0.7;
  }
</style>