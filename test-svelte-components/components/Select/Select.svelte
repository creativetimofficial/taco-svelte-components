<script>
  import {
    getContainerClass,
    getArrowClass,
    getLabelClass,
    menuClass,
    getOptionClass,
    getSelectClass,
    spanClass,
  } from "./select.js";
  import { variantStyle } from "@/utils/colors.js";
  import { fly } from "svelte/transition";
  import ClickOutside from "svelte-click-outside";
  import { makeid } from "@/utils/generateID.js";

  export let variant = "outlined";
  export let size = "md";
  export let color = "blue";
  export let label = "";
  export let error = false;
  export let success = false;
  export let animation = { y: 0, duration: 0 };
  export let options = [];
  export let value;
  export let disabled = false;
  export let itemValue = "value";
  export let itemText = "name";
  export let id = makeid(7);

  let uuid = makeid(7);

  let typeOptions = typeof options[0];
  let selectedValue = "";
  let selectState = false;
  let stateStatus = "close";

  if (typeOptions === "object") {
    options.forEach((element) => {
      value === element[itemValue] ? (selectedValue = element[itemText]) : null;
    });
  }

  stateStatus = stateStatus === "close" && value !== "" ? "withValue" : "close";

  function openSelect() {
    selectState = !selectState;
    stateStatus =
      stateStatus === "withValue" || stateStatus === "close" ? "open" : "close";
    stateStatus === "close" && value !== ""
      ? (stateStatus = "withValue")
      : null;
  }
  function clickOutsideSelect() {
    selectState = false;
    stateStatus = "close";
    stateStatus === "close" && value !== ""
      ? (stateStatus = "withValue")
      : null;
  }

  const sizes = ["lg", "md"];
  const variants = ["outlined", "standard", "static"];

  function getClass(variant, size, color, error, success, stateStatus) {
    size = sizes.includes(size) ? size : "md";
    variant = variants.includes(variant) ? variant : "outlined";
    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";
    const containerClass = getContainerClass(variant, size);
    const selectClass = getSelectClass(
      variant,
      color,
      error,
      success,
      size,
      stateStatus
    );
    const labelClass = getLabelClass(
      variant,
      color,
      error,
      success,
      size,
      stateStatus
    );
    return {
      container: containerClass,
      select: selectClass,
      label: labelClass,
    };
  }
</script>

<ClickOutside on:clickoutside={clickOutsideSelect}>
  <div
    {id}
    class="{getClass(variant, size, color, error, success, stateStatus)
      .container} {$$props.class ? $$props.class : ''}"
    on:click={openSelect}
  >
    <button
      id={uuid}
      type="button"
      {disabled}
      class="
    {getClass(variant, size, color, error, success, stateStatus).select}
  "
      aria-expanded="false"
      aria-haspopup="listbox"
    >
      <span class={spanClass}>{selectedValue ? selectedValue : value}</span>
      <div class={getArrowClass(stateStatus)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div></button
    ><label
      for={uuid}
      class={getClass(variant, size, color, error, success, stateStatus).label}
      >{label}</label
    >
    {#if selectState}
      <ul
        transition:fly={animation ? animation : { y: 0, duration: 0 }}
        tabindex="-1"
        role="listbox"
        class={menuClass}
        id={makeid(7)}
        aria-orientation="vertical"
      >
        {#each options as option, index (index)}
          <li
            id={makeid(7)}
            role="option"
            class="
        {getOptionClass().base}
        {value === option[itemValue] || value === option
              ? getOptionClass('active').state
              : ''}
        {typeOptions === 'object'
              ? option.disabled
                ? getOptionClass('disabled').state
                : ''
              : ''}
      "
            aria-selected="false"
            data-selected="false"
            value={typeOptions === "object" ? option[itemValue] : option}
            on:click={() => {
              typeOptions === "object"
                ? (value = option[itemValue])
                : (value = option);
              selectedValue =
                typeOptions === "object" ? option[itemText] : option;
            }}
          >
            {typeOptions === "object" ? option[itemText] : option}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</ClickOutside>
