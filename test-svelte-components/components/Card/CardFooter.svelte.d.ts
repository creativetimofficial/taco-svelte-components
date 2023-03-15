/** @typedef {typeof __propDef.props}  CardFooterProps */
/** @typedef {typeof __propDef.events}  CardFooterEvents */
/** @typedef {typeof __propDef.slots}  CardFooterSlots */
export default class CardFooter extends SvelteComponentTyped<{
    [x: string]: any;
    divider?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CardFooterProps = typeof __propDef.props;
export type CardFooterEvents = typeof __propDef.events;
export type CardFooterSlots = typeof __propDef.slots;
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
