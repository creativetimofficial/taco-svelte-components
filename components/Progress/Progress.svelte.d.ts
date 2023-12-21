/** @typedef {typeof __propDef.props}  ProgressProps */
/** @typedef {typeof __propDef.events}  ProgressEvents */
/** @typedef {typeof __propDef.slots}  ProgressSlots */
export default class Progress extends SvelteComponentTyped<{
    [x: string]: any;
    variant?: string;
    color?: string;
    id?: string;
    label?: string;
    value?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ProgressProps = typeof __propDef.props;
export type ProgressEvents = typeof __propDef.events;
export type ProgressSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: string;
        color?: string;
        id?: string;
        label?: string;
        value?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
