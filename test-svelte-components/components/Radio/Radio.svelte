<script>
  import {
    containerClass,
    rootClass,
    labelClass,
    getInputClass,
    containerCircle,
  } from "./radio.js";
  import { variantStyle } from "../../utils/colors.js";
  import Ripple from "material-ripple-effects";
  import { forwardEventsBuilder } from "../forwardEvents";
  import { get_current_component } from "svelte/internal";
  import { makeid } from "../../utils/generateID.js";
  const self = get_current_component();

  const forwardEvents = forwardEventsBuilder(self);

  const rippleInit = new Ripple();

  let uuid = makeid(7);
  export let name = "radio";
  export let label = "";
  export let color = "amber";
  export let ripple = "";
  export let value;
  export let groupValue = "";
  export let id = makeid(7);

  function setRipple(e) {
    ripple == "light" || ripple == "dark" ? rippleInit.create(e, ripple) : null;
  }

  function getClassesInput(color) {
    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";
    const radioClasses = getInputClass(color);
    return {
      input: radioClasses.style,
      color: radioClasses.color,
    };
  }
</script>

<div {id} class="{rootClass} {$$props.class ? $$props.class : ''}">
  <label for={uuid} class={containerClass} on:click={(e) => setRipple(e)}
    ><input
      use:forwardEvents
      id={uuid}
      {name}
      type="radio"
      bind:group={groupValue}
      {value}
      class={getClassesInput(color).input}
    />
    <div class="{containerCircle} {getClassesInput(color).color}">
      {#if !$$slots.default}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <circle data-name="ellipse" cx="8" cy="8" r="8" />
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
