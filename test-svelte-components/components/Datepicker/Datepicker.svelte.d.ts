/** @typedef {typeof __propDef.props}  DatepickerProps */
/** @typedef {typeof __propDef.events}  DatepickerEvents */
/** @typedef {typeof __propDef.slots}  DatepickerSlots */
export default class Datepicker extends SvelteComponentTyped<{
    modelValue: any;
    dateFormat: any;
    updateFormat?: (eventDateFormat: any) => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get updateFormat(): (eventDateFormat: any) => void;
}
export type DatepickerProps = typeof __propDef.props;
export type DatepickerEvents = typeof __propDef.events;
export type DatepickerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        modelValue: any;
        dateFormat: any;
        updateFormat?: (eventDateFormat: any) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
