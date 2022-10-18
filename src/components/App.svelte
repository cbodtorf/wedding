<script>
  import { getContext } from "svelte";
  import ScrollWrapper from "$components/helpers/ScrollWrapper.svelte";
  import Nav from "$components/helpers/Nav.svelte";
  import Demo from "$components/demo/Demo.svelte";
  import WIP from "$components/helpers/WIP.svelte";
  import Footer from "$components/Footer.svelte";
  import Wolf from "$components/habitat/Wolf.svelte";
  import Star from "$components/habitat/Star.svelte";
  // import Lamoure from "$components/habitat/Lamoure.svelte";
  import Onevoit from "$components/habitat/Onevoit.svelte";
  import Lobster from "$components/habitat/Lobster.svelte";
  import Pinky from "$components/habitat/Pinky.svelte";
  import Pizza from "$components/habitat/Pizza.svelte";
  import Poppy from "$components/habitat/Poppy.svelte";
  import Cactus from "$components/habitat/Cactus.svelte";
  import Palm from "$components/habitat/Palm.svelte";
  import Triangle from "$components/habitat/Triangle.svelte";
  import Ginkgo from "$components/habitat/Ginkgo.svelte";
  import Oranges from "$components/habitat/Oranges.svelte";
  import Disco from "$components/habitat/Disco.svelte";

  const copy = getContext("copy");

  let clones;


  // Mouse Events
  let m = { x: 0, y: 0 };

  function handleMousemove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  // Stamp Order
  const stamps = [Star,Wolf,Lobster,Onevoit,Pizza,Pinky,Cactus,Poppy,Palm,Triangle,Ginkgo,Oranges,Disco];
</script>

<!-- <WIP /> -->
<!-- <Demo /> -->
<!-- <Footer /> -->
<div class="full-container" on:mousemove={handleMousemove}>
  <ScrollWrapper>
    <div class="grid-wrapper">
      {#each stamps as stamp}
        <svelte:component this={stamp} bind:m={m}/>
      {/each}
      {#each stamps as stamp}
        <svelte:component this={stamp} bind:m={m}/>
      {/each}
    </div>

    <div class="grid-wrapper is-clone">
      {#each stamps as stamp}
        <svelte:component this={stamp} bind:m={m}/>
      {/each}
      {#each stamps as stamp}
        <svelte:component this={stamp} bind:m={m}/>
      {/each}
    </div>
  </ScrollWrapper>
  <div class="title-wrapper">
    <a href="/details">
      <h1 class="title">Caleb <span>x</span> Chelsea <img src="http://kylephx.com/h/heart.png"/></h1>
    </a>
  </div>
  <!-- The mouse position is {m.x} x {m.y} -->

  <!-- mobile  menu -->
  <div class="flex mobile-menu">
    <Nav />
  </div>
</div>

<style>
  .mobile-menu {
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    bottom: 20px;
    width: calc(100% - 50px);
    max-width: 450px;
    padding: 10px 20px;
    display: inline-flex;
    justify-content: space-evenly;
    background: #191919de;
    border-radius: 5px;
    color: #e1ddda;
  }

  :global(.mobile-menu a) {
    color: #e1ddda;
    text-decoration: none;
  }

  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  .full-container {
    height: 100vh;
    overflow: hidden;
  }

  .title-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .title {
    color: var(--color-gray-1000);
    font-family: var(--nimbus);
    white-space: nowrap;
  }

  @media all and (max-width: 600px) {
    .title {
      font-size: var(--px32);
    }
  }
  
  .title span {
    font-size: var(--px24);
    font-family: var(--font-form);
    vertical-align: middle;
  }
  .title img {
    display: inline;
    mix-blend-mode: multiply;

    /* Need to replace img */
    display: none;
  }

  .stamp {
    opacity: 0.85;
    -webkit-mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png');
    -webkit-mask-size: 944px 604px;
    mix-blend-mode: multiply;
  }
</style>