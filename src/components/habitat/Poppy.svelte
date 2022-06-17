<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte";
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
  let clazz = '';
	export { clazz as class };
</script>

<ParalaxWrapper m={m} gridClass="dbl" class="{clazz}">
  <Recolor slot="img" hex="#ba4020" recolorVar="poppy">
    <img class="poppy" src="assets/poppy.png" alt="poppy" />
  </Recolor>
  <span slot="text" class="text text1">I belong in the sun</span>
  <span slot="text2" class="text text2">with you</span>
</ParalaxWrapper>

<style>
  .text {
    font-size: var(--px22);
    color: var(--color-green);
    opacity: 0.8;
    position: absolute;
    bottom: 50%;
  }
  .text1 {
    padding-left: 40px;
  }
  .text2 {
    bottom: 25%;
  }
  .poppy {
    width: 240px;
    filter: var(--recolor-poppy);
    opacity: 0.7;
  }
  @media all and (max-width: 600px) {
    .text {
      bottom: 20%;
    }
    .text2 {
      bottom: 5%;
    }
    .poppy {
      width: unset;
      height: 150px;
      margin: 0 auto;
    }
  }
</style>