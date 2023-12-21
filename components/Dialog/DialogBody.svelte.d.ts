/** @typedef {typeof __propDef.props}  DialogBodyProps */
/** @typedef {typeof __propDef.events}  DialogBodyEvents */
/** @typedef {typeof __propDef.slots}  DialogBodySlots */
export default class DialogBody extends SvelteComponentTyped<{
    [x: string]: any;
    divider?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DialogBodyProps = typeof __propDef.props;
export type DialogBodyEvents = typeof __propDef.events;
export type DialogBodySlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divider?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
