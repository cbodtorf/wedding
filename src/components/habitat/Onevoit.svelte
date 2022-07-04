<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte"; 
  export let m;
</script>

<ParalaxWrapper m={m} gridClass="wide">
  <span slot="text" class="text">ON NE</span>
  <span slot="text2" class="text text2">VOIT BIEN</span>
  <span slot="text3" class="text text3">QU'AVEC LE CŒUR</span>
</ParalaxWrapper>

<style>
  .text {
    font-family: var(--avoda);
    font-size: var(--px32);
    color: var(--color-green);
    opacity: 0.7;
    display: block;
    /* position: absolute;
    bottom: 50%; */
  }
  @media all and (max-width: 600px) {
    .text {
      bottom: unset;
    }
  }
</style>