<script>
  import { getTooltipClass, containerClass } from "./tooltip.js";
  import { fade } from "svelte/transition";
  import { makeid } from "../../utils/generateID.js";

  export let placement = "top";
  export let label = "Tooltip";
  let show = false;
  export let animation = false;
  export let id = makeid(7);

  const positions = [
    "top",
    "top-start",
    "top-end",
    "left",
    "left-start",
    "left-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
  ];

  function getClasses(placement) {
    placement = positions.includes(placement) ? placement : "top";
    const style = getTooltipClass(placement);
    return `${style}`;
  }
</script>

<div
  {id}
  on:mouseenter={() => (show = true)}
  on:mouseleave={() => (show = false)}
  class="{containerClass} {$$props.class ? $$props.class : ''}"
>
  <slot />
  {#if show == true}
    <div
      transition:fade={animation ? { duration: 300 } : { duration: 0 }}
      class={getClasses(placement)}
    >
      {label}
    </div>
  {/if}
</div>
