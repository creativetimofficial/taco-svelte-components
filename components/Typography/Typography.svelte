<script>
  import { variantStyle } from "../../utils/colors.js";
  import { getClass } from "./typography.js";
  import { makeid } from "../../utils/generateID.js";

  export let variant = "paragraph";
  export let color = "inherit";
  export let textGradient = false;
  export let as = null;
  export let id = makeid(7);

  const options = [
    "h1",
    "h2",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "lead",
    "paragraph",
    "small",
  ];

  const tagName = as ? as : variant;

  function getClasses(variant, color, textGradient) {
    variant = options.includes(variant) ? variant : "paragraph";
    color = variantStyle.filled.hasOwnProperty(color) ? color : "inherit";
    const style = getClass(variant, color, textGradient);
    return `${style}`;
  }
</script>

{#if tagName != "paragraph"}
  <svelte:element
    this={tagName}
    {id}
    class="{getClasses(variant, color, textGradient)} {$$props.class
      ? $$props.class
      : ''}"
  >
    <slot />
  </svelte:element>
{:else}
  <svelte:element
    this="p"
    {id}
    class="{getClasses(variant, color, textGradient)} {$$props.class
      ? $$props.class
      : ''}"
  >
    <slot />
  </svelte:element>
{/if}
