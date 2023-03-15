/** @typedef {typeof __propDef.props}  RangeProps */
/** @typedef {typeof __propDef.events}  RangeEvents */
/** @typedef {typeof __propDef.slots}  RangeSlots */
export default class Range extends SvelteComponentTyped<{
    [x: string]: any;
    value: any;
    min: any;
    max: any;
    step: any;
    id?: any;
    size?: string;
    label?: string;
    disabled?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RangeProps = typeof __propDef.props;
export type RangeEvents = typeof __propDef.events;
export type RangeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: any;
        min: any;
        max: any;
        step: any;
        id?: any;
        size?: string;
        label?: string;
        disabled?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
