<script>
  import { page } from '$app/stores';
  import wordmark from "$svg/wordmark.svg";

  const navItems = [
    { route: 'details' },
    { route: 'inn' },
    { route: 'faq' },
  ];

  console.log('$page.url.pathname', $page.url.pathname)
</script>

<header>
  <div class="wordmark">
    <!-- <a href="/" aria-label="Caleb x Chelsea">{@html wordmark}</a> -->
    <a href="/" aria-label="Caleb x Chelsea">Caleb x Chelsea</a>
  </div>

  <div class="navigation">
    {#each navItems as item, i}
      <a class={$page.url.pathname === ('/' + item.route + '/') ? 'active' : ''} href="/{item.route}" aria-label="{item.route.toUpperCase()}">{item.route.toUpperCase()}</a> 
    {/each}
    <!-- <a class:active={$page.url.pathname == item.route} href="/details" aria-label="Details">DETAILS</a>
    <a class:active={$page.url.pathname == item.route} href="/inn" aria-label="Inn">INN</a>
    <a class:active={$page.url.pathname == item.route} href="/faq" aria-label="FAQ">FAQ</a> -->
  </div>
</header>

<style>
  .wordmark, .navigation {
    text-align: center;
    max-width: 25em;
    margin: 0 auto;
    padding: 1em 0;
  }

  .navigation a {
    margin-right: 1em;
  }
  
  .navigation a.active {
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
