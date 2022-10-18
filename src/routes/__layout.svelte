<script>
  import "$styles/app.css";
  import Header from "$components/Header.svelte";
  import { page } from '$app/stores'
  import { onMount } from 'svelte'; 
  import { Mixpanel } from '../utils/mixpanel';

  onMount(() => {
    Mixpanel.track('Page');
  
    document.querySelectorAll('.mp-js').forEach(link => 
      link.addEventListener('click', (el) => {
        console.log('el', el)
        Mixpanel.track(`Clicked ${el.target.innerText}`, {
          href: el.target.href
        })
      })
    )
  });
</script>

{#if $page.url.pathname !== '/'}
  <Header />
{/if}
<main id="content">
  <slot />
</main>
