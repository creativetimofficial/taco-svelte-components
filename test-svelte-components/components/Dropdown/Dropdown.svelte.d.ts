/** @typedef {typeof __propDef.props}  DropdownProps */
/** @typedef {typeof __propDef.events}  DropdownEvents */
/** @typedef {typeof __propDef.slots}  DropdownSlots */
export default class Dropdown extends SvelteComponentTyped<{
    variant?: string;
    color?: string;
    button?: string;
    size?: string;
    menu?: any[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DropdownProps = typeof __propDef.props;
export type DropdownEvents = typeof __propDef.events;
export type DropdownSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        variant?: string;
        color?: string;
        button?: string;
        size?: string;
        menu?: any[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
