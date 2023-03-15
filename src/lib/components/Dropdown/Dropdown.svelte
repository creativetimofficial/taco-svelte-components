<script>
import { variantStyle } from "../../utils/colors.js";
import {
  getStyling,
  getListClass,
  getOptionClass,
  getContainerClass,
} from "./dropdown.js";
import { forwardEventsBuilder } from "../forwardEvents";
import { get_current_component } from "svelte/internal";
import { fly } from "svelte/transition";
import ClickOutside from "svelte-click-outside";
import { makeid } from "../../utils/generateID.js";
const self = get_current_component();

const forwardEvents = forwardEventsBuilder(self);

export let variant = "filled";
export let size = "md";
export let color = "blue";
export let button = "Dropdown";
export let menu = [];

const variantOptions = ["filled", "gradient", "outlined", "text"];
const sizeOptions = ["sm", "md", "lg"];
let selectState = false;
let selectSecondaryState = false;
let selectSecondaryStateId = 0;

function getButtonClasses(variant, size, color) {
  size = sizeOptions.includes(size) ? size : "md";
  variant = variantOptions.includes(variant) ? variant : "filled";
  color = variantStyle.filled.hasOwnProperty(color)
    ? color
    : "blue";

  const style = getStyling(color, variant, size);

  return `${style}`;
}

function openSelect() {
  selectState = !selectState;
}

function openSecondarySelect(id) {
  if (selectSecondaryStateId === id) {
    selectSecondaryState = !selectSecondaryState;
  } else {
    selectSecondaryStateId = id;
    selectSecondaryState = true;
  }
}

function openUrl(url) {
  window.open(url, "_blank");
}

function clickOutsideSelect() {
  selectState = false;
  selectSecondaryState = false;
}
</script>

<ClickOutside on:clickoutside={clickOutsideSelect}>
  <div
    class={getContainerClass('relative')}
  >
    <button
      class={getButtonClasses(variant, size, color)}
      use:forwardEvents
      on:click={openSelect}
    >
      { button }
    </button>
    {#if selectState}
    <ul
        transition:fly={{ y: 15, duration: 300 }}
        tabindex="-1"
        role="listbox"
        class={getListClass(99, size, 'top')}
        id={makeid(7)}
        aria-orientation="vertical"
    >
      {#each menu as option, index (index)}
      <li
        id={makeid(7)}
        role="option"
        class={getOptionClass() +" relative"}
        aria-selected="false"
        data-selected="false"
        on:click={
          option.items ? openSecondarySelect(index) : openUrl(option.url)
        }
      >
        { option.label }
        {#if option.items && selectSecondaryState && index == selectSecondaryStateId}
        <ul
          transition:fly={{ y: 15, duration: 300 }}
          tabindex="-1"
          role="listbox"
          class={getListClass(99, size, 'left')}
          id={makeid(7)}
          aria-orientation="vertical"
        >
          {#each option.items as option2, index2 (index2)}
          <li
            id={makeid(7)}
            role="option"
            class={getOptionClass()}
            aria-selected="false"
            data-selected="false"
            on:click={openUrl(option2.url)}
          >
            { option2.label }
          </li>
          {/each}
        </ul>
        {/if}
      </li>
      {/each}
    </ul>
    {/if}
  </div>
</ClickOutside>