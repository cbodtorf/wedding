<script>
  import ParalaxWrapper from "$components/helpers/ParalaxWrapper.svelte";
  import Recolor from "$components/helpers/Recolor.svelte";
  export let m;
  let clazz = '';
	export { clazz as class };
</script>

<ParalaxWrapper m={m} gridClass="dbl" class="{clazz}" textRotate="10deg">
  <Recolor slot="img" hex="#ba4020" recolorVar="disco">
    <img class="disco stamp" src="assets/disco.gif" alt="disco" />
  </Recolor>
  <!-- <span slot="text"class="text">How the stars stole the night away</span> -->
</ParalaxWrapper>

<style>
  .text {
    font-size: var(--px24);
    color: var(--color-green);
    opacity: 0.8;
    position: absolute;
    bottom: 55%;
  }
  .disco {
    width: 200px;
    filter: var(--recolor-disco);
    opacity: 0.7;
  }

  .stamp {
    -webkit-mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png');
    -webkit-mask-size: 944px 604px;
    mix-blend-mode: multiply;
  }

  @media all and (max-width: 600px) {
    .text {
      font-size: var(--px14);
    }
  }
</style>