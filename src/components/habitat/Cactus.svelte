<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte";
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
  let clazz = '';
	export { clazz as class };
</script>

<ParalaxWrapper m={m} gridClass="dbl" class="{clazz}">
  <Recolor slot="img" hex="#046040" recolorVar="cactus">
    <img class="cactus" src="assets/cactus.png" alt="cactus" />
  </Recolor>
  <span slot="text" class="text text1">As easy as 1 2 3</span>
</ParalaxWrapper>

<style>
  .text {
    font-size: var(--px22);
    color: var(--color-orange);
    opacity: 0.8;
    position: absolute;
    bottom: 50%;
  }
  .text1 {
    padding-left: 40px;
  }
  .cactus {
    width: 120px;
    filter: var(--recolor-cactus);
    opacity: 0.7;
  }
</style>