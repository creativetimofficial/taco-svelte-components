<script>
  import { getClasses } from "./datepicker.js";
  import ClickOutside from "svelte-click-outside";
  import { makeid } from "../../utils/generateID.js";
  import { onMount } from "svelte";

  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const MONTH_SHORT_NAMES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
  export let modelValue;
  export let dateFormat;  
  let showDatepicker = false;
  let month = "";
  let year = "";
  let currentDay = "";
  let no_of_days = [];
  let blankdays = [];

  export function updateFormat(eventDateFormat) {
    dateFormat = eventDateFormat;
    let updatedDate = new Date(year, month, currentDay);
    modelValue = formatDateForDisplay(updatedDate);
  }

  function initDate() {
    let today;

    if (modelValue) {
      today = new Date(Date.parse(modelValue));
    } else {
      today = new Date();
    }

    month = today.getMonth();
    year = today.getFullYear();
    currentDay = today.getDate();
    modelValue = formatDateForDisplay(today);
  }

  function formatDateForDisplay(date) {
    let formattedDay = DAYS[date.getDay()];
    let formattedDate = ("0" + date.getDate()).slice(-2);
    let formattedMonth = MONTH_NAMES[date.getMonth()];
    let formattedMonthShortName = MONTH_SHORT_NAMES[date.getMonth()];
    let formattedMonthInNumber = ("0" + (parseInt(date.getMonth()) + 1)).slice(
      -2
    );
    let formattedYear = date.getFullYear();

    if (dateFormat === "DD-MM-YYYY") {
      return `${formattedDate}-${formattedMonthInNumber}-${formattedYear}`;
    }

    if (dateFormat === "YYYY-MM-DD") {
      return `${formattedYear}-${formattedMonthInNumber}-${formattedDate}`;
    }

    if (dateFormat === "D d M, Y") {
      return `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}`;
    }

    return `${formattedDay} ${formattedDate} ${formattedMonth} ${formattedYear}`;
  }

  function isSelectedDate(date) {
    const d = new Date(year, month, date);

    return modelValue === formatDateForDisplay(d) ? true : false;
  }

  function isToday(date) {
    const today = new Date();
    const d = new Date(year, month, date);

    return today.toDateString() === d.toDateString() ? true : false;
  }

  function getDateValue(dayNumber) {
    currentDay = dayNumber;
    let selectedDate = new Date(year, month, dayNumber);
    modelValue = formatDateForDisplay(selectedDate);
    showDatepicker = false;
  }

  function getNoOfDays() {
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let dayOfWeek = new Date(year, month).getDay();
    let blankdaysArray = [];

    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];

    for (let j = 1; j <= daysInMonth; j++) {
      daysArray.push(j);
    }

    blankdays = blankdaysArray;
    no_of_days = daysArray;
  }

  function handleLtButton () {
      if (month == 0) {
          year--;
          month = 11;
      } else {
          month--;
      }
      getNoOfDays();
  }

  function handleGtButton () {
      if (month == 11) {
          month = 0;
          year++;
      } else {
          month++;
      }
      getNoOfDays();
  }

  function handleKeyDown (e) {
    if(e.keyCode == 27) {//enter
      showDatepicker = false
    }
    if(e.keyCode == 9) {//tab
      if(showDatepicker === true) e.preventDefault();
    }
  }

  onMount(() => {
    initDate();
    getNoOfDays();
  });
</script>
<ClickOutside on:clickoutside={() => (showDatepicker = false)}> 
  <div id="Datepicker">
    <label for="datepicker" class={getClasses().label}>Select Date</label>
    <div class="relative">
      <input
        type="text"
        value={modelValue}
        on:click={() => (showDatepicker = !showDatepicker)}
        on:keydown={handleKeyDown}
        class={getClasses().input}
        placeholder="Select date"
        readonly
      />
      <div class={getClasses().calendarIconDiv}>
        <svg
          class="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      {#if showDatepicker}
      <div class={getClasses().datepickerDiv}>
        <div class={getClasses().datepickerHeaderDiv}>
          <button
            type="button"
            class={getClasses().buttonLtGt}
            on:click={handleLtButton}
          >
            <svg
              class="h-6 w-6 text-gray-400 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div>
            <span class="text-xl font-light text-gray-800">{
              MONTH_NAMES[month]
            }</span>
            <span class="ml-1 text-lg text-gray-600 font-normal">{
              year
            }</span>
          </div>
          <button
            type="button"
            class={getClasses().buttonLtGt}
            on:click={handleGtButton}
          >
            <svg
              class="h-6 w-6 text-gray-400 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div class={getClasses().dayNamesDiv}>
          {#each DAYS as day, index (index)}
          <div style="width: 14.285%">
            <div class="text-gray-500 font-medium text-center text-xs">
              { day }
            </div>
          </div>
          {/each}
        </div>

        <div class={getClasses().daysDiv}>
          {#each blankdays as blankday,index2 (index2)}
          <div
            style="width: 14.285%"
            class="text-center text-sm"
          ></div>
          {/each}
          {#each no_of_days as dayNumber, dayNumberIndex (dayNumberIndex.toString() + month + year)}
          <div
            style="width: 14.285%; line-height: 2.285rem"
            on:click={getDateValue(dayNumber)}
            class={
              isSelectedDate(dayNumber)
                ? getClasses().dayButton1
                : isToday(dayNumber)
                ? getClasses().dayButton2
                : getClasses().dayButton3
            }
          >
            { dayNumber }
          </div>
          {/each}
        </div>
      </div>
      {/if}
    </div>
  </div>
</ClickOutside>