<script>
  import {
    getContainerClass,
    getTextareaClass,
    getLabelClass,
  } from "./textarea.js";
  import { variantStyle } from "@/utils/colors.js";
  import { makeid } from "@/utils/generateID.js";

  let uuid = makeid(7);
  export let variant = "outlined";
  export let size = "md";
  export let color = "blue";
  export let label = "";
  export let placeholder = " ";
  export let error = false;
  export let success = false;
  export let disabled = false;
  export let resize = false;
  export let value = "";
  export let id = makeid(7);

  const sizes = ["lg", "md"];
  const variants = ["outlined", "standard", "static"];

  function getClass(variant, size, color, error, success, resize) {
    size = sizes.includes(size) ? size : "md";
    variant = variants.includes(variant) ? variant : "outlined";
    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";
    const containerClass = getContainerClass();
    const textareaClass = getTextareaClass(
      variant,
      color,
      size,
      error,
      success,
      resize
    );
    const labelClass = getLabelClass(variant, color, size, error, success);
    return {
      containerClass,
      textareaClass,
      labelClass,
    };
  }
</script>

<div
  {id}
  class="{getClass(variant, size, color, error, success, resize)
    .containerClass} {$$props.class ? $$props.class : ''}"
>
  <textarea
    id={uuid}
    class={getClass(variant, size, color, error, success, resize).textareaClass}
    placeholder={variant == "static" ? placeholder : " "}
    {disabled}
    bind:value
  />
  <label
    for={uuid}
    class={getClass(variant, size, color, error, success, resize).labelClass}
  >
    {label}
  </label>
</div>
