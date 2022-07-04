<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte";
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
  let clazz = '';
	export { clazz as class };
</script>

<ParalaxWrapper m={m} gridClass="wide" class="{clazz}" textRotate="-30deg">
  <Recolor slot="img" hex="#046040" recolorVar="oranges">
    <img class="oranges" src="assets/oranges.png" alt="oranges" />
  </Recolor>
  <span slot="text"class="text">West Coast Love</span>
</ParalaxWrapper>

<style>
  .text {
    font-family: var(--architectural);
    font-size: var(--px48);
    color: var(--color-orange);
    opacity: 0.8;
    position: absolute;
    bottom: 10%;
  }
  .oranges {
    width: 120px;
    filter: var(--recolor-oranges);
    opacity: 0.7;
  }
  @media all and (max-width: 600px) {
    .text {
      font-size: var(--px18);
    }
  }
</style>