/** @typedef {typeof __propDef.props}  SelectProps */
/** @typedef {typeof __propDef.events}  SelectEvents */
/** @typedef {typeof __propDef.slots}  SelectSlots */
export default class Select extends SvelteComponentTyped<{
    [x: string]: any;
    value: any;
    animation?: {
        y: number;
        duration: number;
    };
    disabled?: boolean;
    variant?: string;
    color?: string;
    id?: string;
    size?: string;
    label?: string;
    error?: boolean;
    success?: boolean;
    options?: any[];
    itemValue?: string;
    itemText?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: any;
        animation?: {
            y: number;
            duration: number;
        };
        disabled?: boolean;
        variant?: string;
        color?: string;
        id?: string;
        size?: string;
        label?: string;
        error?: boolean;
        success?: boolean;
        options?: any[];
        itemValue?: string;
        itemText?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
