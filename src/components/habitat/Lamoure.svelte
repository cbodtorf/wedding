<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte"; 
  export let m;
</script>

<ParalaxWrapper m={m} gridClass="wide">
  <span slot="text" class="text">L'amoure Parfait</span>
</ParalaxWrapper>

<style>
  .text {
    font-size: var(--px24);
    color: var(--color-green);
    opacity: 0.7;
    position: absolute;
    bottom: 50%;
  }
</style>