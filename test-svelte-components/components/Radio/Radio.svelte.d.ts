/** @typedef {typeof __propDef.props}  RadioProps */
/** @typedef {typeof __propDef.events}  RadioEvents */
/** @typedef {typeof __propDef.slots}  RadioSlots */
export default class Radio extends SvelteComponentTyped<{
    [x: string]: any;
    value: any;
    color?: string;
    id?: any;
    ripple?: string;
    label?: string;
    name?: string;
    groupValue?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type RadioProps = typeof __propDef.props;
export type RadioEvents = typeof __propDef.events;
export type RadioSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: any;
        color?: string;
        id?: any;
        ripple?: string;
        label?: string;
        name?: string;
        groupValue?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
