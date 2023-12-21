/** @typedef {typeof __propDef.props}  PopoverProps */
/** @typedef {typeof __propDef.events}  PopoverEvents */
/** @typedef {typeof __propDef.slots}  PopoverSlots */
export default class Popover extends SvelteComponentTyped<{
    animation?: boolean;
    placement?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    content: {};
}> {
}
export type PopoverProps = typeof __propDef.props;
export type PopoverEvents = typeof __propDef.events;
export type PopoverSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        animation?: boolean;
        placement?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        content: {};
    };
};
export {};
