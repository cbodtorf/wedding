<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		let data = {};

		// try {
    //   const res = await fetch(`/api/registry.json`);
    //   data = await res.json();
		// } catch (e) {
		// 	console.log(e);
		// }
		// // you can pass the `articles` via props like that
		// return {
		// 	props: {
		// 		data
		// 	}
		// };
	}
</script>

<script>
  import { onMount } from 'svelte';
  import { goto } from "$app/navigation";
  import LinearProgress from '@smui/linear-progress';
  export let data;
  
  console.log('data =>', data);
</script>

<div class="wrapper">
  <h1>Registry</h1>
  <fieldset>
    <!-- <legend>Registry</legend> -->
    <article>
      <div>
        <p>The most important gift to us is your presence on our special day.</p>
        <p>Thus, we will be foregoing a traditional registry.</p>
        <p>If you would still like to give a gift, please consider donating to these charitable organizations, or our honeymoon fund.</p>
      </div>
    </article>
  </fieldset>

  <fieldset>
    <legend>Honeymoon Fund</legend>
    <article>
      <div>
        <p><a target="_blank" class="mp-js" href="https://www.travelersjoy.com/calebxchelsea">View Our Honeymoon Registry</a></p>
      </div>
    </article>
  </fieldset>

  {#each data.body.data.pages as page}
    <fieldset>
      <legend>{page.relationships.parents[0].page.title}</legend>
      <article>
        <div class="img-wrapper">
          <a
            target="_blank"
            class="mp-js"
            href="https://www.justgiving.com/{page.slug}"
          >
            <img src="{page.relationships.beneficiaries.nodes[0].logo}" alt="{page.relationships.parents[0].page.title}"/>
          </a>
          <br />
          <a
            target="_blank"
            class="mp-js"
            href="https://www.justgiving.com/{page.slug}">
            View Donation Page
          </a>
        </div>
        <div class="content-wrapper">
          <p>{page.relationships.beneficiaries.nodes[0].impactStatement}</p>
          <div>
            <LinearProgress class="my-colored-bar" progress={page.donationSummary.totalAmount.value / page.targetWithCurrency.value} />
            <div class="progress-numbers">
              <span class="total-amount">${page.donationSummary.totalAmount.value / 100}</span>
              <span class="target">${page.targetWithCurrency.value / 100}</span>
            </div>
          </div>
          <button>
            <a
              target="_blank"
              class="mp-js"
              href="https://www.justgiving.com/{page.slug}/donate?experiments=donate_now_track_click&successType=StaticDonateButtonClick">
              Contribute Now
            </a>
          </button>
          <br />
        </div>
      </article>
    </fieldset>
  {/each}

</div>

<style>
  a {
    color: var(--color-light-green);
  }
  legend, h1 {
    color: var(--color-gray-1000);
    font-family: var(--nimbus);
  }
  h1 {
    font-size: var(--px22);
  }
  legend {
    font-size: var(--px16);
  }
  .wrapper {
    padding: 1rem;
    max-width: 60rem;
    margin: 0 auto;
  }
  article p {
    font-family: var(--font-form);
    font-family: var(--mono);
    margin-bottom: 30px;
  }

  fieldset {
    margin-top: 25px;
  }

  article {
    display: flex;
    justify-content: space-around;
    position: relative;
    flex-direction: row;
  }

  article .content-wrapper {
    flex: .75;
  }

  article .img-wrapper {
    flex: .25;
    width: 75px;
    height: 75px;
  }

  article img {
    width: 75px;
    height: 75px;
  }

  fieldset:nth-child(odd) {
    background-color: #f8f6e9;
  }
  fieldset:nth-child(odd) mark {
    background: #eaa3a8;
  }
  fieldset:nth-child(even) {
    background-color: #eaa3a8;
  }
  fieldset:nth-child(even) mark {
    background: #f8f6e9;
  }

  button a {
    text-decoration: none;
  }

  .progress-numbers {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
  }

  /* @media only screen and (min-width: 50em) {
    article {
      flex-direction: row;
    }
  } */
</style>