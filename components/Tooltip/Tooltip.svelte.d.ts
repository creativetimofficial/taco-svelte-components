/** @typedef {typeof __propDef.props}  TooltipProps */
/** @typedef {typeof __propDef.events}  TooltipEvents */
/** @typedef {typeof __propDef.slots}  TooltipSlots */
export default class Tooltip extends SvelteComponentTyped<{
    [x: string]: any;
    animation?: boolean;
    id?: string;
    label?: string;
    placement?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TooltipProps = typeof __propDef.props;
export type TooltipEvents = typeof __propDef.events;
export type TooltipSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        animation?: boolean;
        id?: string;
        label?: string;
        placement?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
