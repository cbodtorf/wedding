<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte";
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
  let clazz = '';
	export { clazz as class };
</script>

<ParalaxWrapper m={m} gridClass="dbl" class="{clazz}">
  <Recolor slot="img" hex="#046040" recolorVar="wolf">
    <img class="wolf" src="assets/wolf.png" alt="wolf" />
  </Recolor>
  <!-- <span slot="text" class="text">Baby Princess</span> -->
</ParalaxWrapper>

<style>
  .text {
    font-size: var(--px32);
    color: var(--color-orange);
    opacity: 0.8;
    position: absolute;
    bottom: 50%;
    padding-right: 40px;
  }
  .wolf {
    width: 240px;
    filter: var(--recolor-wolf);
    opacity: 0.7;
  }
  @media all and (max-width: 600px) {
    .text {
      font-size: var(--px16);
    }
  }
</style>