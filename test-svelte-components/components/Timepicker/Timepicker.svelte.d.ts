/** @typedef {typeof __propDef.props}  TimepickerProps */
/** @typedef {typeof __propDef.events}  TimepickerEvents */
/** @typedef {typeof __propDef.slots}  TimepickerSlots */
export default class Timepicker extends SvelteComponentTyped<{
    modelValue: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TimepickerProps = typeof __propDef.props;
export type TimepickerEvents = typeof __propDef.events;
export type TimepickerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        modelValue: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
