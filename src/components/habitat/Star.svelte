<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte"; 
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
</script>

<ParalaxWrapper m={m} gridClass="tall" textRotate="-90deg">
  <span slot="text" class="text">Star Crossed Lovers</span>
    <Recolor slot="img" hex="#046040" recolorVar="star">
      <img class="star" src="assets/gemini-const.png" alt="gemini" />
      <img class="star" src="assets/cancer-const.png" alt="cancer" />
  </Recolor>
</ParalaxWrapper>

<style>
  span.text {
    font-family: var(--bungee);
    font-size: var(--px14);
    color: var(--color-orange);
    opacity: 0.7;
    position: absolute;
    bottom: 50%;
    width: 200px;
  }
  .star {
    width: 120px;
    filter: var(--recolor-star);
    opacity: 0.7;
  }

  @media all and (max-width: 600px) {
    span.text {
      bottom: 60%;
      left: -10%;
      width: 200px;
    }
  }
</style>