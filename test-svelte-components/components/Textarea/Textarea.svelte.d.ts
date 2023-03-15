/** @typedef {typeof __propDef.props}  TextareaProps */
/** @typedef {typeof __propDef.events}  TextareaEvents */
/** @typedef {typeof __propDef.slots}  TextareaSlots */
export default class Textarea extends SvelteComponentTyped<{
    [x: string]: any;
    variant?: string;
    color?: string;
    id?: any;
    size?: string;
    label?: string;
    value?: string;
    placeholder?: string;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    resize?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextareaProps = typeof __propDef.props;
export type TextareaEvents = typeof __propDef.events;
export type TextareaSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: string;
        color?: string;
        id?: any;
        size?: string;
        label?: string;
        value?: string;
        placeholder?: string;
        error?: boolean;
        success?: boolean;
        disabled?: boolean;
        resize?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
