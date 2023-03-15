/** @typedef {typeof __propDef.props}  DialogContainerProps */
/** @typedef {typeof __propDef.events}  DialogContainerEvents */
/** @typedef {typeof __propDef.slots}  DialogContainerSlots */
export default class DialogContainer extends SvelteComponentTyped<{
    [x: string]: any;
    animation?: boolean;
    id?: any;
    size?: string;
    open?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DialogContainerProps = typeof __propDef.props;
export type DialogContainerEvents = typeof __propDef.events;
export type DialogContainerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        animation?: boolean;
        id?: any;
        size?: string;
        open?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
