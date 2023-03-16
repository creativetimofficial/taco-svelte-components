<script>
    import { getContainerClass, getInputClass } from "./timepicker.js";
    import ClickOutside from "svelte-click-outside";
    import { makeid } from "../../utils/generateID.js";
    import { onMount } from "svelte";

    export let modelValue;

    let selectedHour = "12";
    let selectedMinute = "00";
    let selectedAmPm = "pm";
    let showTimepicker = false;

    function convertTime12to24(time12h) {
      const [time, modifier] = time12h.split(" ");
      let [hours, minutes] = time.split(":");
      if (hours === "12") {
        hours = "00";
      }
      if (modifier === "pm") {
        hours = parseInt(hours, 10) + 12;
      }
      return `${hours}:${minutes}`;
    }

    function close() {
      showTimepicker = false;
      update();
    }

    function changeAmPm() {
      selectedAmPm = selectedAmPm == "am" ? "pm" : "am";
      update();
    }

    function update() {
      if ((selectedMinute < 10) & (selectedMinute.toString().length < 2)) {
        selectedMinute = "0" + selectedMinute;
      }
      if ((selectedHour < 10) & (selectedHour.toString().length > 1)) {
        selectedHour = selectedHour % 10;
      }
      if (selectedHour == 0) {
        selectedHour = "00";
      }
      if (selectedHour > 12) {
        selectedHour = 12;
      }
      if (selectedHour < 0) {
        selectedHour = "00";
      }
      if (selectedMinute > 59) {
        selectedMinute = 59;
      }
      if (selectedMinute < 0) {
        selectedMinute = "00";
      }
      const time12h =
        selectedHour + ":" + selectedMinute + " " + selectedAmPm;
      const updatedTimer = convertTime12to24(time12h);
      modelValue = updatedTimer;
    
    }

    onMount(() => {
      const temp = modelValue.split(":");
      if (temp[0] < 24 && temp[0] >= 0 && temp[1] < 60 && temp[1] >= 0) {
        if (temp[0] > 12) {
          selectedHour = temp[0] - 12;
          selectedAmPm = "pm";
        } else {
          selectedHour = temp[0];
          selectedAmPm = "am";
        }
        selectedMinute = temp[1];
      }
      
      update();
    });
</script>
<ClickOutside on:clickoutside={close}>
    <div>
      <div class="w-fit">
        <input
          id={makeid(7)}
          class={getInputClass()}
          value={modelValue}
          readonly
          on:click={() => {showTimepicker = !showTimepicker}}
        />
        {#if showTimepicker}
        <div class={getContainerClass().one}>
          <div class={getContainerClass().two}>
            <input
              type="number"
              min="1"
              max="12"
              step="1"
              class="text-center ml-3"
              bind:value={selectedHour}
              on:click={update}
            />
            <span class={getContainerClass().divider}>:</span>
            <input
              type="number"
              min="0"
              max="59"
              step="5"
              class="text-center"
              bind:value={selectedMinute}
              on:click={update}
            />
            <div on:click={changeAmPm} class={getContainerClass().three}>
              { selectedAmPm }
            </div>
          </div>
        </div>
        {/if}
      </div>
    </div>
</ClickOutside>