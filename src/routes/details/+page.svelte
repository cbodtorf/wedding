<script>
  import { onMount } from 'svelte';
  import RSVP from "$components/helpers/RSVP.svelte";
  let haveAndToHold;

  // Inspo: https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
  onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('scroll-animation');
            return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          entry.target.classList.remove('scroll-animation');
        });
      });

      observer.observe(haveAndToHold);
    }
  });
</script>

<div class="wrapper">
  <!-- Wedding -->
  <fieldset>
    <legend>The Wedding</legend>
    <article>
      <div>
        <p>Please join us for an evening of celebration as <mark>Chelsea Murphy and Caleb Bodtorf</mark> join each other in marriage.</p>
        <p>There will be plenty of eating, drinking, dancing and silliness to be had. Dress is formal and fun.</p>
        <p>For more information on the wedding and how to book your stay, please read <a href="/inn">The Inn</a> section of this website.</p>
        <p>We can't wait to celebrate with you!</p>
        <p><small>Please <a href="/inn">RSVP</a> and book your stay by 30 October 2022.</small></p>
      </div>
    </article>
  </fieldset>

  <!-- RSVP -->
  <!-- <fieldset>
    <legend>RSVP</legend>
    <article>
      <div>
        <RSVP />
      </div>
    </article>
  </fieldset> -->

  <!-- Fakes css :nth-child rule -->
  <div></div>

  <!-- To Have And To Hold -->
  <div bind:this={haveAndToHold} class="to-have-and-to-hold scroll-animation">
    <div class="to-have-and-to-hold text-text left-left"></div>
    <div class="to-have-and-to-hold text-text"></div>
    <div class="to-have-and-to-hold right-right"></div>
  </div>

  <!-- Welcome -->
  <fieldset>
    <legend>The Welcome</legend>
    <article>
      <div>
        <div class="img-wrapper granada">
          <img class="granada" src="/assets/granada.jpg" alt="granada" />
        </div>
      </div>
      <div>
        <p><mark>Friday, 2 Decemeber 2022</mark></p>
        <p><mark>5:00 in the evening</mark></p>
        <p>Rancho Bernardo Inn</p>
        <p><mark>Granada Lawn</mark></p>
        <br />
        <p>Meet & Greet</p>
      </div>
    </article>
  </fieldset>

  <!-- Ceremony -->
  <fieldset>
    <legend>The Ceremony</legend>
    <article>
      <div>
        <p><mark>Saturday, 3 Decemeber 2022</mark></p>
        <p><mark>Arrive as early as 3:00 in the afternoon, ceremony begins promptly at 3:30</mark></p>
        <p>Rancho Bernardo Inn</p>
        <p><mark>Valencia Lawn</mark></p>
        <br />
        <p>Celebrate Love</p>
      </div>
      <div>
        <div class="img-wrapper valencia">
          <img class="valencia" src="/assets/valencia.jpg" alt="valencia" />
        </div>
      </div>
    </article>
  </fieldset>

  <!-- Reception -->
  <fieldset>
    <legend>The Reception</legend>
    <article>
      <div>
        <div class="img-wrapper santiago">
          <img class="santiago" src="/assets/santiago.jpg" alt="santiago" />
        </div>
      </div>
      <div>
        <p><mark>to follow</mark></p>
        <p>Rancho Bernardo Inn</p>
        <p><mark>Santiago Courtyard</mark></p>
        <br />
        <p><a href="/dinner-party">Dinner Party</a> • <a target="_blank" class="mp-js" href="https://open.spotify.com/playlist/5iAJXeWB3LhOFeOMdAEZN1">Music</a> • <a href="javascript:void(0)">Vibes</a></p>
      </div>
    </article>
  </fieldset>
  <br />
  <br />
</div>

<style>
  a {
    text-decoration: none;
  }
  legend {
    color: var(--color-gray-1000);
    font-family: var(--nimbus);
    font-size: var(--px22);
  }
  .wrapper {
    padding: 1rem;
    max-width: 60rem;
    margin: 0 auto;
  }
  article p {
    text-align: center;
    font-family: var(--font-form);
    font-family: var(--mono);
    margin-bottom: 30px;
  }

  fieldset {
    margin-top: 50px;
  }

  article {
    display: flex;
    justify-content: space-around;
    position: relative;
    flex-direction: column;
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

  .img-wrapper {
    position: relative;
    border: 1px solid var(--color-gray-1000);
    box-sizing: content-box;
    margin: 0 auto;
  }
  .valencia {
    background: #eaa3a8;
  }
  .santiago, .granada {
    background: #f8f6e9;
  }

  @media only screen and (min-width: 50em) {
    article {
      flex-direction: row;
    }
    .valencia {
      bottom: -40px;
    }
    .santiago, .granada {
      bottom: -40px;
    }
    .img-wrapper {
      max-width: 400px;
    }
  }


  .to-have-and-to-hold {
    overflow-x: hidden;
    position: relative;
    display: block;
    width: 100%;
    height: 300px;
    margin: 10vh auto;
  }
  .to-have-and-to-hold.text-text.left-left {
    background-image: url(/assets/have-and-to-hold-left.svg);
    background-size: auto 100%;
  }
  .to-have-and-to-hold.right-right {
    margin-top: 0vh;
    margin-bottom: 0vh;
    background-image: url(/assets/have-and-to-hold-right.svg);
    background-position: 50% 50%;
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
  .to-have-and-to-hold.text-text {
    position: absolute;
    z-index: 1;
    margin-top: 0vh;
    margin-bottom: 0vh;
    background-image: url(/assets/have-and-to-hold-text.svg);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: 0.94;
  }

  @keyframes slideToLeft {
    0% {
      transform: translate(150px, -150px) rotateZ(-20deg);  
      animation-timing-function:ease-in-out;
    }
  }

  @keyframes slideToRight {
    0% {
      transform: translate(-150px, -150px) rotateZ(20deg);  
      animation-timing-function:ease-in-out;
    }
  }

  .scroll-animation .right-right {
    animation: slideToLeft ease-in-out 2s;
  }

  .scroll-animation .left-left {
    animation: slideToRight ease-in-out 2s;
  }
</style>