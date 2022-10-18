<script>
  import { page } from '$app/stores';

  const navItems = [
    { route: 'details' },
    { route: 'inn' },
    { route: 'faq' },
    { route: 'registry' },
    { route: 'sd' },
  ];

  console.log('$page.url.pathname', $page.url.pathname)
</script>

{#each navItems as item, i}
  <a class={$page.url.pathname === ('/' + item.route + '/') ? 'active' : ''} href="/{item.route}" aria-label="{item.route.toUpperCase()}">
    {item.route.toUpperCase()}
  </a>
  {#if i !== navItems.length - 1}
    •
  {/if}
{/each}

<style>
</style>
