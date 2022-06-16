<script>
  import wordmark from "$svg/wordmark.svg";
</script>

<header>
  <div class="wordmark">
    <!-- <a href="/" aria-label="Caleb x Chelsea">{@html wordmark}</a> -->
    <a href="/" aria-label="Caleb x Chelsea">Caleb x Chelsea</a>
  </div>
</header>

<style>
  .wordmark {
    text-align: center;
    max-width: 25em;
    margin: 0 auto;
    padding: 1em 0;
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
