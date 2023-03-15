<script>
    import {
        getContainerClass,
        headerClass,
        badgesContainer,
        getBadgeClass,
        getDropdownClass,
        dropdownContainer,
        getItemClass,
    } from "./multiselect.js";
    import { variantStyle } from "@/utils/colors.js";
    import { fly } from "svelte/transition";
    import ClickOutside from "svelte-click-outside";

    export let options = [];
    export let selected = [];
    export let placeholder = "Select Items";
    export let size = "md";
    export let color = "green";
    export let multiple = false;
    export let animation = false;

    let dropdownOpen = false;
    const sizes = ["sm", "md"];

    $: if(multiple === false && selected.length>0) {
        selected = [selected[0]]
    }

    function toggleDropdown() {
        dropdownOpen = !dropdownOpen;
    }

    function selectItem(item) {
        const index = selected.indexOf(item);

        if (multiple === true && index === -1) {
            selected = [...selected, item];
        } else if (multiple === false && index === -1) {
            selected[0] = item;
            toggleDropdown();
        } else {
            selected = selected.filter((item) => item !== selected[index]);
        }
    }

    function removeItem(item) {
        const index = selected.indexOf(item);
        if (index !== -1) {
            selected = selected.filter((item) => item !== selected[index]);
        }
    }

    function getContainerStyle(size) {
        size = sizes.includes(size) ? size : "md";
        const style = getContainerClass(size);

        return `${style}`;
    }

    function getBadgeStyle(color) {
        color = variantStyle.filled.hasOwnProperty(color) ? color : "green";
        const style = getBadgeClass(color);

        return `${style}`;
    }

    function clickOutsideSelect() {
        if (dropdownOpen) {
            toggleDropdown();
        }
    }
</script>

<ClickOutside on:clickoutside={clickOutsideSelect}>
    <div class={getContainerStyle(size)}>
        <div class={headerClass} on:click={toggleDropdown}>
            {#if selected.length === 0}
                <div>{placeholder}</div>
            {:else if multiple === false && selected.length !== 0}
                <div>
                    {selected[0]}
                </div>
            {:else}
                <div class={badgesContainer}>
                    {#each selected as item, index}
                        <span class={getBadgeStyle(color)}>
                            {item}
                            <button
                                type="button"
                                aria-label="Close"
                                on:click={removeItem(item)}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </span>
                    {/each}
                </div>
            {/if}
            <span class={getDropdownClass(dropdownOpen)}>
                <svg
                    version="1.1"
                    class="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M17.418,6.109c0.272-0.268,0.709-0.268,0.979,0s0.271,0.701,0,0.969l-7.908,7.83c-0.27,0.268-0.707,0.268-0.979,0l-7.908-7.83c-0.27-0.268-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.979,0L10,13.25L17.418,6.109z"
                    />
                </svg>
            </span>
        </div>
        {#if dropdownOpen}
            <div
                class={dropdownContainer}
                transition:fly={animation === true
                    ? { y: 0, duration: 400 }
                    : { y: 0, duration: 0 }}
            >
                {#each options as item, index}
                    <div
                        class={getItemClass(selected.includes(item))}
                        on:click={selectItem(item)}
                    >
                        {item}
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</ClickOutside>
