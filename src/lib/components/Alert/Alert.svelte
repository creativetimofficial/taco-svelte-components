<script>
  import { variantStyle } from "@/utils/colors.js";
  import { getClass, dismissibleClass, iconClass } from "./alert.js";
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { makeid } from "@/utils/generateID.js";

  export let variant = "filled";
  export let color = "blue";
  export let show = true;
  export let dismissible = false;
  export let animation = { y: 0, duration: 0 };
  export let id = makeid(7);

  const emit = createEventDispatcher();

  function emitEvent() {
    emit("closed");
  }

  const options = ["filled", "gradient"];

  function getClasses(variant, color) {
    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";
    variant = options.includes(variant) ? variant : "filled";
    const style = getClass(variant, color);
    return `${style}`;
  }
</script>

{#if show}
  <div
    {id}
    class="{getClasses(variant, color)} {$$props.class ? $$props.class : ''}"
    transition:fly={animation ? animation : { y: 0, duration: 0 }}
  >
    {#if $$slots.icon}
      <span class={iconClass}>
        <slot name="icon" />
      </span>
    {/if}
    <span class={$$slots.icon ? "ml-8 mr-12" : ""}>
      <slot />
    </span>
    {#if dismissible}
      <div class={dismissibleClass} on:click={emitEvent}>
        <div role="button" class="w-max p-1 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    {/if}
  </div>
{/if}
