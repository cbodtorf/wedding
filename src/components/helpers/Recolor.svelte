<script>
  export let r = 231;
  export let g = 124;
  export let b = 100;
  export let hex;
  export let recolorVar;

  function hexToRgb(hex) {
    const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (normal) return normal.slice(1).map(e => parseInt(e, 16));

    const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (shorthand) return shorthand.slice(1).map(e => 0x11 * parseInt(e, 16));

    return null;
  }

  if (hex) {
    const rgb = hexToRgb(hex);
    r = rgb[0]
    g = rgb[1]
    b = rgb[2]
  }
</script>

<div style="--recolor-{recolorVar}: url(#{recolorVar})">
  <svg height="0px" width="0px">
    <defs>
      <filter id="{recolorVar}" color-interpolation-filters="sRGB">
        <feColorMatrix type="matrix" values="0 0 0 0 {r / 255}
                                             0 0 0 0 {g / 255}
                                             0 0 0 0 {b / 255}
                                             0 0 0 1 0"/>
      </filter>
    </defs>
  </svg>

  <slot />
</div>

<style>
</style>