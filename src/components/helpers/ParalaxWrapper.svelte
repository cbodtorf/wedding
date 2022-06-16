<script>
  import { onMount } from 'svelte'; 
  export let m;
  export let gridClass;
  export let textRotate = "0deg";
  let clazz = '';
	export { clazz as class };
  let FACE;
  const BOUNDS = 20
  let innerWidth;
  let innerHeight;

  onMount(() => {
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
  })

  const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
    const INPUT_RANGE = inputUpper - inputLower
    const OUTPUT_RANGE = outputUpper - outputLower
    return value => outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
  }

  const update = ({ x, y }) => {
    if (FACE) {
      const POS_X = mapRange(0, innerWidth, -BOUNDS, BOUNDS)(x)
      const POS_Y = mapRange(0, innerHeight, -BOUNDS, BOUNDS)(y)
      FACE.style.setProperty('--x', POS_X)
      FACE.style.setProperty('--y', POS_Y)  
    }
  }

  // Reactive
  $: update(m);

  /**
   * Inspo: https://jhey.dev/writing/how-to-cursor-tracking-parallax/
   */
</script>

<div
  style="--rotate: {textRotate}"
  class="box {gridClass} layered {clazz}"
  bind:this="{FACE}"
>
  <slot name="img" />
  <slot name="img2" />
  <slot name="img3" />
  <slot name="text" class="text" />
  <slot name="text2" class="text" />
  <slot name="text3" class="text" />
</div>

<style>
  .layered {
    position: relative;
  }
  :global(.text) {
    transform: rotate(var(--rotate)) translate(calc(var(--x, 0) * 0.5px), calc(var(--y, 0) * 0.5px)) scaleY(1);
  }
  :global(img) {
    transform: translate(calc(var(--x, 0) * 0.25px), calc(var(--y, 0) * 0.25px));
  }
</style>