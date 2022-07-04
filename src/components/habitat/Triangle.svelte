<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte";
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
  let clazz = '';
	export { clazz as class };
</script>

<ParalaxWrapper m={m} gridClass="" class="{clazz}">
  <Recolor slot="img" hex="#ba4020" recolorVar="triangle">
    <img class="triangle" src="assets/triangle.png" alt="triangle" />
  </Recolor>
  <span slot="text" class="text text1">12</span>
  <span slot="text2" class="text text2">03</span>
  <span slot="text3" class="text text3">22</span>
</ParalaxWrapper>

<style>
  .text {
    font-family: "National 2 Web";
    font-size: var(--px16);
    color: var(--color-green);
    opacity: 0.8;
    position: absolute;
  }
  .text1 {
    top: 25%;
    left: 35%;
  }
  .text2 {
    top: 60%;
    left: 15%;
  }
  .text3 {
    top: 60%;
    left: 55%;
  }
  .triangle {
    width: 240px;
    filter: var(--recolor-triangle);
    opacity: 0.7;
  }
  @media all and (max-width: 600px) {
    .text1 {
      top: 35%;
    }
    .text2 {
      top: 75%;
    }
    .text3 {
      top: 75%;
    }
  }
</style>