<script>
  import { page } from '$app/stores';
  import Nav from "$components/helpers/Nav.svelte";
  import wordmark from "$svg/wordmark.svg";
</script>

<header>
  <div class="wordmark">
    <!-- <a href="/" aria-label="Caleb x Chelsea">{@html wordmark}</a> -->
    <a href="/" aria-label="Caleb x Chelsea">Caleb x Chelsea</a>
  </div>

  <div class="navigation">
    <Nav />
  </div>
</header>

<style>
  .wordmark, .navigation {
    text-align: center;
    max-width: 25em;
    margin: 0 auto;
    padding: 1em 0;
  }

  .navigation {
    display: flex;
    justify-content: space-around;
  }

  :global(.navigation a.active) {
    color: #eaa3a8;
  }

  .wordmark a {
    border: none;
    text-decoration: none;
    color: var(--color-gray-1000);
    font-family: var(--nimbus);
    font-size: var(--px28);
  }

  .wordmark a:hover {
    background-color: transparent;
  }

  :global(.wordmark svg path) {
    fill: currentColor;
  }
</style>
