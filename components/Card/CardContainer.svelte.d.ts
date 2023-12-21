/** @typedef {typeof __propDef.props}  CardContainerProps */
/** @typedef {typeof __propDef.events}  CardContainerEvents */
/** @typedef {typeof __propDef.slots}  CardContainerSlots */
export default class CardContainer extends SvelteComponentTyped<{
    [x: string]: any;
    variant?: string;
    color?: string;
    shadow?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CardContainerProps = typeof __propDef.props;
export type CardContainerEvents = typeof __propDef.events;
export type CardContainerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: string;
        color?: string;
        shadow?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
