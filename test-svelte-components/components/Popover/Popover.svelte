<script>
  import { fade } from "svelte/transition";
  import ClickOutside from "svelte-click-outside";
  import { getPopoverClass } from "./popover.js";

  export let placement = "top";
  let show = false;
  export let animation = false;

</script>

<div class="relative w-fit">
  <ClickOutside
    on:clickoutside={() => {
      show = false;
    }}
  >
    <span
      on:click={() => {
        show = !show;
      }}
    >
      <slot />
    </span>
    {#if show == true}
      <div
        transition:fade={animation ? { duration: 300 } : { duration: 0 }}
        class="{getPopoverClass(placement)} absolute min-w-max"
      >
      <slot name="content" />
      </div>
    {/if}
  </ClickOutside>
</div>
