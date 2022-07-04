<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte";
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
  let clazz = '';
	export { clazz as class };
</script>

<ParalaxWrapper m={m} gridClass="dbl" class="{clazz}" textRotate="10deg">
  <Recolor slot="img" hex="#046040" recolorVar="cactus">
    <img class="cactus" src="assets/cactus.png" alt="cactus" />
  </Recolor>
  <span slot="text" class="text text1">as easy as 1 2 3</span>
</ParalaxWrapper>

<style>
  .text {
    font-family: var(--paradizo);
    font-size: var(--px16);
    color: var(--color-orange);
    opacity: 0.8;
    position: absolute;
    bottom: 0%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    white-space: pre;
  }
  .text1 {
    padding-left: 110px;
  }
  .cactus {
    width: 120px;
    filter: var(--recolor-cactus);
    opacity: 0.7;
  }
  @media all and (max-width: 600px) {
    .text {
      bottom: 20%;
    }
    .cactus {
      width: unset;
      height: 150px;
      margin: 0 auto;
    }
  }
</style>