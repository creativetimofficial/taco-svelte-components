<script>
import {
  getListClass,
  getContainerClass,
  getOptionClass,
  getAnimationRectangleClass,
} from "./tabs.js";
import { forwardEventsBuilder } from "../forwardEvents";
import { get_current_component } from "svelte/internal";
import { fade } from "svelte/transition";
import { makeid } from "../../utils/generateID.js";
import { onMount } from "svelte";
const self = get_current_component();
const forwardEvents = forwardEventsBuilder(self);

export let tabsData = [];
export let icons = false;
export let selected = "";

let activeTab = "";
let translate = 0;
let width = 0;
let divs = [];

function setActiveTab(string, index) {
  width = divs[index].clientWidth;
  translate = 0;
  for (let i = 0; i < index; i++) {
    translate += divs[i].clientWidth;
  }
  activeTab = string;
}

onMount(() => {
  if (selected) {
    let ind = tabsData.findIndex((data) => {
      return data.label === selected;
    });
    setActiveTab(tabsData[ind].label, ind);
  } else {
    setActiveTab(tabsData[0].label, 0);
  }
});
</script>

<div class={getContainerClass().one}>
  <div class={getContainerClass().two}>
    <ul 
        class={getListClass().headers} 
        use:forwardEvents
        data-tabs="tabs"
    >
    {#each tabsData as option,index (index)}
      <li
        id={makeid(7)}
        bind:this={divs[index]}
        class={getOptionClass().li}
        on:click={setActiveTab(option.label, index)}
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          class={getOptionClass().a}
          active={activeTab === option.label ? true : false}
          role="tab"
        >
        {#if icons}
          <i class={option.icon}></i>&nbsp;
        {/if}
          { option.label }
        </a>
      </li>
      <div
        class={getAnimationRectangleClass().div}
        style="
          padding: 0px;
          width: {width}px;
          transform: translate3d({translate}px, 0px, 0px);
          transition: all 0.5s ease 0s;"
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class={getAnimationRectangleClass().a} role="tab">-</a>
      </div>
      {/each}
    </ul>
    <div class="p-5">
    {#each tabsData as option, index (index)}
        {#if activeTab === option.label}
        <div
            transition:fade={{duration:400}}
            class="absolute z-[99]"
            id={makeid(7)}
            role="tabpanel"
        >
          <p class={getOptionClass().para}>{ option.desc }</p>
        </div>
        {/if}
    {/each}
    {#each tabsData as option, index (index)}
      <div
        class="opacity-0 z-[0] {activeTab === option.label ? '' : 'hidden'}"
        id={makeid(7)}
        role="separator"
      >
        <p class={getOptionClass().para}>{ option.desc }</p>
      </div>
    {/each}
    </div>
  </div>
</div>