/** @typedef {typeof __propDef.props}  InputProps */
/** @typedef {typeof __propDef.events}  InputEvents */
/** @typedef {typeof __propDef.slots}  InputSlots */
export default class Input extends SvelteComponentTyped<{
    [x: string]: any;
    disabled?: boolean;
    variant?: string;
    color?: string;
    id?: string;
    size?: string;
    label?: string;
    value?: string;
    placeholder?: string;
    error?: boolean;
    success?: boolean;
    type?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean;
        variant?: string;
        color?: string;
        id?: string;
        size?: string;
        label?: string;
        value?: string;
        placeholder?: string;
        error?: boolean;
        success?: boolean;
        type?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
