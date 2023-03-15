<script>
  import {
    getContainerClass,
    getIconClass,
    getInputClass,
    getLabelClass,
  } from "./input.js";
  import { variantStyle } from "../../utils/colors.js";
  import { forwardEventsBuilder } from "../forwardEvents";
  import { get_current_component } from "svelte/internal";
  import { makeid } from "../../utils/generateID.js";
  const self = get_current_component();

  const forwardEvents = forwardEventsBuilder(self);

  let uuid = makeid(7);
  export let variant = "outlined";
  export let size = "md";
  export let color = "blue";
  export let label = "";
  export let placeholder = " ";
  export let error = false;
  export let success = false;
  export let disabled = false;
  export let type = "text";
  export let value = "";
  export let id = makeid(7);

  function typeAction(node) {
    node.type = type;
  }

  const sizes = ["lg", "md"];
  const variants = ["outlined", "standard", "static"];

  function getClassStyle(variant, size, color, error, success) {
    size = sizes.includes(size) ? size : "md";
    variant = variants.includes(variant) ? variant : "outlined";
    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";
    const containerClass = getContainerClass(size, variant);
    const iconClass = getIconClass(size, variant);
    const inputClass = getInputClass(
      variant,
      color,
      size,
      error,
      success,
      $$slots.default
    );
    const labelClass = getLabelClass(variant, color, size, error, success);
    return {
      containerClass,
      iconClass,
      inputClass,
      labelClass,
    };
  }
</script>

<div
  {id}
  class="{getClassStyle(variant, size, color, error, success)
    .containerClass} {$$props.class ? $$props.class : ''}"
>
  {#if $$slots.default}
    <div class={getClassStyle(variant, size, color, error, success).iconClass}>
      <slot />
    </div>
  {/if}
  <input
    id={uuid}
    use:forwardEvents
    use:typeAction
    class={getClassStyle(variant, size, color, error, success).inputClass}
    placeholder={variant == "static" ? placeholder : " "}
    {disabled}
    bind:value
  />
  <label
    for={uuid}
    class={getClassStyle(variant, size, color, error, success).labelClass}
  >
    {label}
  </label>
</div>
