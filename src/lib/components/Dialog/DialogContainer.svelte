<script>
  import { backdrop, getContainerClass } from "./dialog.js";
  import { fly, fade } from "svelte/transition";
  import { makeid } from "../../utils/generateID.js";

  export let open = false;
  export let size = "md";
  export let animation = false;
  export let id = makeid(7);

  const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];

  function getClasses(size) {
    size = sizes.includes(size) ? size : "md";
    const style = getContainerClass(size);
    return `${style}`;
  }
</script>

{#if open}
  <div
    {id}
    transition:fade={animation ? { duration: 500 } : { duration: 0 }}
    class="{backdrop} z-[9999] overflow-auto {$$props.class
      ? $$props.class
      : ''}"
  >
    <div
      transition:fly={animation
        ? { y: -100, duration: 500 }
        : { y: 0, duration: 0 }}
      tabindex="-1"
      class={getClasses(size)}
    >
      <slot />
    </div>
  </div>
{/if}
