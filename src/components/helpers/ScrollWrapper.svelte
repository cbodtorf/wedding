<script>
  import { onMount } from "svelte";
  // inspo 1 https://codepen.io/vincentorback/pen/eeWwBq
  // inspo 2 https://fuzzco.com/
  
  // Bindings
  let scrollY;
  let scrollX;
  let width;
  let ctx;

  // Computed
  $: height = Math.floor(scrollY/200)*200;

  // Other
  const bp = {
    xl: 1600.0,
    l: 1200.0,
    m: 880.0,
    s: 700.0,
    xs: 420.0
  };

  const page = {
    goingDown: false,
    stopScrolling: false,
    startScrollTimer: null,
    prevScroll: null,
    newScroll: null,
    scrollSpeed: 1,
    scrollInterval: 30
  };

  var feed = {
    sectionCount: 10,
    appendCount: 0,
    currentName: 'curated',
    isLoadingSection: false
  };

  // Scroll Loop
  let clones;
  let clonesHeight = 0;
  let scrollPos = 0;
  let scrollHeight = 0;
  let disableScroll = false;

  const getScrollPos = (ctx) => (ctx.pageYOffset || ctx.scrollTop) - (ctx.clientTop || 0);
  const setScrollPos = (ctx, pos) => {ctx.scrollTop = pos};
  const getClonesHeight = (clones) => {
    clonesHeight = 0;

    for (let i = 0; i < clones.length; i += 1) {
      clonesHeight = clonesHeight + clones[i].offsetHeight;
    }

    return clonesHeight;
  }
  const reCalc = (ctx, scrollPos, scrollHeight, clones, clonesHeight) => {
    scrollPos = getScrollPos(ctx);
    scrollHeight = ctx.scrollHeight;
    clonesHeight = getClonesHeight(clones);
    console.log('recalc', { scrollPos, scrollHeight, clonesHeight, })

    if (scrollPos <= 0) {
      setScrollPos(ctx, 1); // Scroll 1 pixel to allow upwards scrolling
    }
  }
  function scrollUpdate () {
    // console.log('scrollUpdate', ctx)
    if (!disableScroll) {
      scrollPos = getScrollPos(ctx);
      console.log('scrollPos', scrollPos + clonesHeight, scrollHeight)

      // console.log('to top?', clonesHeight + scrollPos >= scrollHeight)
      if (clonesHeight + scrollPos >= scrollHeight) {
        console.log('to top')
        // Scroll to the top when you’ve reached the bottom
        setScrollPos(ctx, 1); // Scroll down 1 pixel to allow upwards scrolling
        disableScroll = true;
      } else if (scrollPos <= 0) {
        console.log('to bottom')
        // Scroll to the bottom when you reach the top
        setScrollPos(ctx, scrollHeight - clonesHeight);
        disableScroll = true;
      }
    }

    if (disableScroll) {
      // console.log('disableScroll', disableScroll)
      // Disable scroll-jumping for a short time to avoid flickering
      setTimeout(function () {
        disableScroll = false;
        // console.log('disableScroll', disableScroll)
      }, 40);
    }
  }

  onMount(() => {
    console.log('ctx', ctx)
    scrollHeight = ctx.scrollHeight
    // Scroll Loop Init
    clones = document.querySelectorAll('.is-clone');
    // console.log('clones', clones.length);
    window.requestAnimationFrame(() => {
      reCalc(ctx, scrollPos, scrollHeight, clones, clonesHeight);
    });

    // window.addEventListener('scroll', function (evt) {
    //   // console.log('scroll', evt)
    //   window.requestAnimationFrame(() => {
    //     scrollUpdate();
    //   });
    // }, false);

    window.addEventListener('resize', function () {
    window.requestAnimationFrame(() => {
        reCalc(ctx, scrollPos, scrollHeight, clones, clonesHeight);
      });
    }, false);

    page.autoScroll = function() {
      if (!page.stopScrolling && width > bp.s) {
        if (page.goingDown) {
          window.scrollBy(0, -page.scrollSpeed)
        } else {
          window.scrollBy(0, page.scrollSpeed)
        }
      }
    };

    page.watchScroll = function() {
      const scrollTop = scrollY;

      page.autoScroll();
      // Stop automatic scroll when user is scrolling, and change direction if need be.
      // Adding/subtracting an extra 2 pixels for padding to prevent false positive on scroll.
      if (page.prevScroll + 2 < scrollTop || page.prevScroll - 2 > scrollTop) {
        page.stopScrolling = true;
        clearTimeout(page.startScrollTimer);
        page.startScrollTimer = setTimeout(function() {
          page.stopScrolling = false;
        }, 50);
        if (page.prevScroll + 30 < scrollTop) {
          console.log('page going up')
          page.goingDown = false;
        }
        if (page.prevScroll - 30 > scrollTop) {
          console.log('page going down')
          page.goingDown = true;
        }
      }
      page.prevScroll = scrollTop;
    };

    // Init
    // Show curated feed initially
    // feed.showFeed('curated');

    // Set scrollTop after 1ms to prevent browser from remembering previous scroll position
    setTimeout(() => {
      // feed.setup();
      // feed.interval = setInterval(page.watchScroll, page.scrollInterval);
      // page.interval = setInterval(feed.watchScroll, page.scrollInterval);
    }, 1);

  });
</script>

<svelte:window bind:scrollY={scrollY} bind:scrollX={scrollX} bind:innerWidth={width} />

<!-- <div bind:this={ctx} class="scroll wrapper" style="height:{height}px"> -->
<div bind:this={ctx} class="scroll" on:scroll={scrollUpdate}>
  <slot />
</div>

<style>
  .scroll {
    overflow: auto;
    height: 100%;
    /* position: absolute;
    width: 100%; */
  }
</style>