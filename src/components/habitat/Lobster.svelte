<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte";
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
</script>

<ParalaxWrapper m={m} gridClass="wide">
  <Recolor slot="img" hex="#ba4020" recolorVar="lobster">
    <img class="lobster" src="assets/lobster.png" alt="lobster" />
  </Recolor>
  <span slot="text" class="text">Moonwalking in mi casa</span>
</ParalaxWrapper>

<style>
  .text {
    font-size: var(--px16);
    color: var(--color-green);
    opacity: 0.8;
    position: absolute;
    bottom: 50%;
    padding-right: 40px;
  }
  .lobster {
    width: 240px;
    filter: var(--recolor-lobster);
    opacity: 0.7;
  }
</style>