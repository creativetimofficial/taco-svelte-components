/** @typedef {typeof __propDef.props}  CardHeaderProps */
/** @typedef {typeof __propDef.events}  CardHeaderEvents */
/** @typedef {typeof __propDef.slots}  CardHeaderSlots */
export default class CardHeader extends SvelteComponentTyped<{
    [x: string]: any;
    variant?: string;
    color?: string;
    shadow?: boolean;
    floated?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CardHeaderProps = typeof __propDef.props;
export type CardHeaderEvents = typeof __propDef.events;
export type CardHeaderSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: string;
        color?: string;
        shadow?: boolean;
        floated?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
