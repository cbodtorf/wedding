<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte";
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
  let clazz = '';
	export { clazz as class };
</script>

<ParalaxWrapper m={m} gridClass="" class="{clazz}">
  <Recolor slot="img" hex="#046040" recolorVar="ginkgo">
    <img class="ginkgo" src="assets/ginkgo.png" alt="ginkgo" />
  </Recolor>
  <span slot="text" class="text text1">Antisocial</span>
  <span slot="text2" class="text text2">Extrovert</span>
</ParalaxWrapper>

<style>
  .text {
    font-size: var(--px22);
    color: var(--color-orange);
    opacity: 0.8;
    position: absolute;
    bottom: 40%;
  }
  .text2 {
    bottom: 20%;
    padding-left: 40px;
  }
  .ginkgo {
    width: 120px;
    filter: var(--recolor-ginkgo);
    opacity: 0.7;
  }
  @media all and (max-width: 600px) {
    .text {
      font-size: var(--px12);
    }
  }
</style>