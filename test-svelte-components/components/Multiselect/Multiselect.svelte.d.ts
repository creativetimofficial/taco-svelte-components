/** @typedef {typeof __propDef.props}  MultiselectProps */
/** @typedef {typeof __propDef.events}  MultiselectEvents */
/** @typedef {typeof __propDef.slots}  MultiselectSlots */
export default class Multiselect extends SvelteComponentTyped<{
    selected?: any[];
    multiple?: boolean;
    color?: string;
    animation?: boolean;
    size?: string;
    placeholder?: string;
    options?: any[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MultiselectProps = typeof __propDef.props;
export type MultiselectEvents = typeof __propDef.events;
export type MultiselectSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        selected?: any[];
        multiple?: boolean;
        color?: string;
        animation?: boolean;
        size?: string;
        placeholder?: string;
        options?: any[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
