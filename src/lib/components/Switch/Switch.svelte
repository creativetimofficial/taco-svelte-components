<script>
  import {
    containerClass,
    rootClass,
    labelClass,
    rippleClass,
    getInputClass,
    circleClass,
  } from "./switch.js";
  import { variantStyle } from "../../utils/colors.js";
  import Ripple from "material-ripple-effects";
  import { makeid } from "../../utils/generateID.js";

  const rippleInit = new Ripple();

  let uuid = makeid(7);
  export let label = "";
  export let color = "blue";
  export let ripple = null;
  export let trueValue = true;
  export let falseValue = false;
  export let value = "";
  export let id = makeid(7);

  function setRipple(e) {
    ripple == "light" || ripple == "dark" ? rippleInit.create(e, ripple) : null;
  }

  function getClassesInput(color) {
    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";
    const switchClasses = getInputClass(color);
    return {
      input: switchClasses.style,
      color: switchClasses.color,
    };
  }
</script>

<div {id} class="{rootClass} {$$props.class ? $$props.class : ''}">
  <div class={containerClass}>
    <input
      id={uuid}
      type="checkbox"
      class={getClassesInput(color).input}
      checked={value === trueValue}
      bind:value
      on:change={() => {
        value === "true"
          ? (value = true)
          : value === "false"
          ? (value = false)
          : null;
        value = trueValue === value ? falseValue : trueValue;
      }}
    />
    <label for={uuid} class="{circleClass} {getClassesInput(color).color}">
      <div class={rippleClass} on:click={(e) => setRipple(e)} />
    </label>
  </div>
  {#if label}
    <label for={uuid} class={labelClass}>{label}</label>
  {/if}
</div>
