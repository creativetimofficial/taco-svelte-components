<script>
  import {
    containerClass,
    rootClass,
    labelClass,
    getInputClass,
    containerIcon,
  } from "./checkbox.js";
  import { variantStyle } from "@/utils/colors.js";
  import Ripple from "material-ripple-effects";
  import { forwardEventsBuilder } from "../forwardEvents";
  import { get_current_component } from "svelte/internal";
  import { makeid } from "@/utils/generateID.js";
  const self = get_current_component();

  const forwardEvents = forwardEventsBuilder(self);

  const rippleInit = new Ripple();

  let uuid = makeid(7);
  export let label = "";
  export let color = "amber";
  export let ripple = "";
  export let checked = false;
  export let id = makeid(7);

  function setRipple(e) {
    ripple == "light" || ripple == "dark" ? rippleInit.create(e, ripple) : null;
  }

  function getClassesInput(color) {
    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";
    const style = getInputClass(color);
    return `${style}`;
  }
</script>

<div {id} class="{rootClass} {$$props.class ? $$props.class : ''}">
  <label for={uuid} class={containerClass} on:click={(e) => setRipple(e)}
    ><input
      use:forwardEvents
      id={uuid}
      type="checkbox"
      bind:checked
      class={getClassesInput(color)}
    />
    <div class={containerIcon}>
      {#if !$$slots.default}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      {:else}
        <slot />
      {/if}
    </div>
  </label>
  {#if label}
    <label for={uuid} class={labelClass}>{label}</label>
  {/if}
</div>
