<script>
  import { page } from '$app/stores';

  const navItems = [
    { route: 'details' },
    { route: 'inn' },
    { route: 'faq' },
    { route: 'registry' },
  ];

  console.log('$page.url.pathname', $page.url.pathname)
</script>

{#each navItems as item, i}
  <a class={$page.url.pathname === ('/' + item.route + '/') ? 'active' : ''} href="/{item.route}" aria-label="{item.route.toUpperCase()}">{item.route.toUpperCase()}</a> 
{/each}

<style>
</style>
