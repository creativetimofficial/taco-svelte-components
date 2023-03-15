<script>
    import { onMount, onDestroy } from "svelte";
    import { getContainerClass, titleClass, closingButtonClass } from "./toast";

    export let title = "";
    export let content = "";
    export let time = 0;
    export let placement = "top";

    let visible = true;
    const positions = [
        "top",
        "top-start",
        "top-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
    ];

    function hideNotification() {
        visible = false;
    }

    onMount(() => {
        if (time > 0) {
            setTimeout(() => {
                hideNotification();
            }, time);
        }
    });

    onDestroy(() => {
        clearTimeout(hideNotification);
    });

    function getContainerStyle(placement) {
        placement = positions.includes(placement) ? placement : "top";
        const style = getContainerClass(placement);
        return `${style}`;
    }
</script>

{#if visible}
    <div class={getContainerStyle(placement)}>
        <div class={titleClass}>
            <p>{title}</p>
            <button class={closingButtonClass} on:click={hideNotification}
                >&times</button
            >
        </div>
        <div>
            <p>{ content }</p>
        </div>
    </div>
{/if}
