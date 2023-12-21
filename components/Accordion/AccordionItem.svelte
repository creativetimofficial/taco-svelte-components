<script>
  import { writable } from "svelte/store";
  import { getContext, onMount } from "svelte";
  import { slide } from "svelte/transition";
  import { getAccordionClasses } from "./accordion.js";

  export let animation = false;
  export let open = false;
  export let disabled = false;

  export const activeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-auto"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>`;
  export const inactiveIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-auto"><path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>`;

  const multi = getContext("accordionMultiple") ?? {};
  const selected = multi.selected ?? writable();

  const self = {};
  let _open = open;
  open = false;
  onMount(() => {
    if (_open) $selected = self;
    return selected.subscribe((x) => (open = x === self));
  });

  function handleToggle(event) {
    selected.set(open ? {} : self);
  }

  $: getActiveClasses = open ? getAccordionClasses().activeHeader : "";
  $: getDisabledClasses = disabled ? getAccordionClasses().disabledHeader : "";
</script>

<div class={getAccordionClasses().base}>
  <button class={`${getAccordionClasses().header} ${getActiveClasses} ${getDisabledClasses}`} on:click={handleToggle}>
    <slot name="header" />
    <span class={getAccordionClasses().headerIcon}
      >{@html open ? inactiveIcon : activeIcon}
    </span>
  </button>
  {#if open && !disabled}
    <div
      class={getAccordionClasses().body}
      transition:slide={{ duration: animation ? 300 : 0 }}
    >
      <slot name="body" />
    </div>
  {/if}
</div>
