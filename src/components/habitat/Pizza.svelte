<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte";
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
  let clazz = '';
	export { clazz as class };
</script>

<ParalaxWrapper m={m} gridClass="tall" class="{clazz}">
  <Recolor slot="img" hex="#046040" recolorVar="pizza">
    <img class="pizza" src="assets/pizza.png" alt="pizza" />
  </Recolor>
  <span slot="text" class="text">'cause I do it for the thrill</span>
</ParalaxWrapper>

<style>
  .text {
    font-size: var(--px12);
    color: var(--color-orange);
    opacity: 0.8;
    position: absolute;
    bottom: 50%;
    padding-right: 40px;
  }
  .pizza {
    width: 240px;
    filter: var(--recolor-pizza);
    opacity: 0.7;
  }
  @media all and (max-width: 600px) {
    .text {
      bottom: unset;
      padding-right: unset;
    }
  }
</style>