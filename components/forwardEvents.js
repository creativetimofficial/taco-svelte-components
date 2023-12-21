import { bubble, listen } from "svelte/internal";

export function forwardEventsBuilder(component, additionalEvents = []) {
  const events = [
    "input",
    "change",
    "focus",
    "blur",
    "click",
    ...additionalEvents,
  ];

  function forward(e) {
    bubble(component, e);
  }

  return (node) => {
    const destructors = [];

    for (let i = 0; i < events.length; i++) {
      destructors.push(listen(node, events[i], forward));
    }

    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
      },
    };
  };
}
