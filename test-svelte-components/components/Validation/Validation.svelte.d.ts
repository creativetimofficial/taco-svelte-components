/** @typedef {typeof __propDef.props}  ValidationProps */
/** @typedef {typeof __propDef.events}  ValidationEvents */
/** @typedef {typeof __propDef.slots}  ValidationSlots */
export default class Validation extends SvelteComponentTyped<{
    [x: string]: any;
    id?: any;
    errors?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ValidationProps = typeof __propDef.props;
export type ValidationEvents = typeof __propDef.events;
export type ValidationSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        id?: any;
        errors?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
