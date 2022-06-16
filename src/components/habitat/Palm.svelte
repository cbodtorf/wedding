<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte";
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
  let clazz = '';
	export { clazz as class };
</script>

<ParalaxWrapper m={m} gridClass="wide" class="{clazz}">
  <Recolor slot="img" hex="#ba4020" recolorVar="palm">
    <img class="palm" src="assets/palm.png" alt="palm" />
  </Recolor>
  <span slot="text" class="text text1">Rancho Bernardo Inn</span>
  <span slot="text2" class="text text2">3 DECEMBER 2022</span>
</ParalaxWrapper>

<style>
  .text {
    opacity: 0.8;
    position: absolute;
  }
  .text1 {
    font-size: var(--px24);
    bottom: var(--px32);
    color: var(--color-green);
  }
  .text2 {
    bottom: var(--px14);
    font-size: var(--px16);
    color: var(--color-orange);
    padding-left: 60px;
  }
  .palm {
    width: 100px;
    filter: var(--recolor-palm);
    opacity: 0.7;
  }
</style>