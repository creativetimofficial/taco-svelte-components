/** @typedef {typeof __propDef.props}  AlertProps */
/** @typedef {typeof __propDef.events}  AlertEvents */
/** @typedef {typeof __propDef.slots}  AlertSlots */
export default class Alert extends SvelteComponentTyped<{
    [x: string]: any;
    variant?: string;
    color?: string;
    show?: boolean;
    dismissible?: boolean;
    animation?: {
        y: number;
        duration: number;
    };
    id?: any;
}, {
    closed: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    icon: {};
    default: {};
}> {
}
export type AlertProps = typeof __propDef.props;
export type AlertEvents = typeof __propDef.events;
export type AlertSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: string;
        color?: string;
        show?: boolean;
        dismissible?: boolean;
        animation?: {
            y: number;
            duration: number;
        };
        id?: any;
    };
    events: {
        closed: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
    };
};
export {};
