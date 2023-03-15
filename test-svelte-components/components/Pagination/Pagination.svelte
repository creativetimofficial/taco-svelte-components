<script>
  import { variantStyle } from "@/utils/colors.js";
  import {
    prevNextElement,
    getPaginationClass,
    itemPagination,
  } from "./pagination.js";
  import { createEventDispatcher } from "svelte";
  import { makeid } from "@/utils/generateID.js";

  export let pageCount = 0;
  export let perPage = 10;
  export let total = 0;
  export let currentPage = 1;
  export let size = "md";
  export let color = "orange";
  export let id = makeid(7);

  const emit = createEventDispatcher();

  const defaultPagesToDisplay = 5;

  function getMinPage() {
    const pagesToAdd = Math.floor(pagesToDisplay / 2);
    const newMaxPage = pagesToAdd + currentPage;
    if (newMaxPage > totalPages) {
      return totalPages - pagesToDisplay + 1;
    }
    return currentPage - pagesToAdd;
  }

  function getMaxPage() {
    const pagesToAdd = Math.floor(pagesToDisplay / 2);
    const newMaxPage = pagesToAdd + currentPage;
    if (newMaxPage < totalPages) {
      return newMaxPage;
    } else {
      return totalPages;
    }
  }

  $: totalPages =
    pageCount > 0 ? pageCount : total > 0 ? Math.ceil(total / perPage) : 1;

  $: pagesToDisplay =
    totalPages > 0 && totalPages < defaultPagesToDisplay
      ? totalPages
      : defaultPagesToDisplay;

  $: minPage = currentPage >= pagesToDisplay ? getMinPage() : 1;

  $: maxPage = currentPage >= pagesToDisplay ? getMaxPage() : pagesToDisplay;

  function range(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }
    return arr;
  }

  function changePage(item) {
    emit("click", { page: item });
  }

  function nextPage() {
    if (currentPage < totalPages) {
      emit("click", { page: currentPage + 1 });
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      emit("click", { page: currentPage - 1 });
    }
  }

  function getClasses(color, size) {
    const validSizes = ["sm", "md", "lg"];
    color = variantStyle.filled.hasOwnProperty(color) ? color : "green";
    size = validSizes.includes(size) ? size : "md";
    const style = getPaginationClass(size, color);
    return style;
  }
</script>

<ul {id} class="flex list-none space-x-1 {$$props.class ? $$props.class : ''}">
  <li
    class="{prevNextElement} {getClasses(color, size).size} {currentPage !== 1
      ? 'cursor-pointer'
      : ''}"
    on:click={prevPage}
  >
    <span aria-label="Previous">
      <span aria-hidden="true"
        ><i class="fa fa-angle-left" aria-hidden="true" /></span
      >
    </span>
  </li>
  {#each range(minPage, maxPage) as item, index (index)}
    <li
      on:click={changePage(item)}
      class="{itemPagination} {currentPage !== item
        ? 'cursor-pointer'
        : ''} {currentPage === item
        ? getClasses(color, size).color + ' pointer-events-none'
        : 'border border-solid border-gray-300 bg-white'} {getClasses(
        color,
        size
      ).size}"
      disabled={currentPage === item}
    >
      <span class={currentPage === item ? "text-white" : "text-gray-700"}
        >{item}</span
      >
    </li>
  {/each}
  <li
    class="{prevNextElement} {getClasses(color, size).size} {currentPage !==
    totalPages
      ? 'cursor-pointer'
      : ''}"
    on:click={nextPage}
  >
    <span aria-label="Next">
      <span aria-hidden="true"
        ><i class="fa fa-angle-right" aria-hidden="true" /></span
      >
    </span>
  </li>
</ul>
