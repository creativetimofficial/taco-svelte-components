/** @typedef {typeof __propDef.props}  NavbarProps */
/** @typedef {typeof __propDef.events}  NavbarEvents */
/** @typedef {typeof __propDef.slots}  NavbarSlots */
export default class Navbar extends SvelteComponentTyped<{
    [x: string]: any;
    variant?: string;
    color?: string;
    id?: any;
    items?: any[];
    fullWidth?: boolean;
    shadow?: boolean;
    blurred?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    title: {};
    button: {};
}> {
}
export type NavbarProps = typeof __propDef.props;
export type NavbarEvents = typeof __propDef.events;
export type NavbarSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: string;
        color?: string;
        id?: any;
        items?: any[];
        fullWidth?: boolean;
        shadow?: boolean;
        blurred?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        button: {};
    };
};
export {};
