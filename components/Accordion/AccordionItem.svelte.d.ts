/** @typedef {typeof __propDef.props}  AccordionItemProps */
/** @typedef {typeof __propDef.events}  AccordionItemEvents */
/** @typedef {typeof __propDef.slots}  AccordionItemSlots */
export default class AccordionItem extends SvelteComponentTyped<{
    animation?: boolean;
    open?: boolean;
    disabled?: boolean;
    activeIcon?: string;
    inactiveIcon?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    header: {};
    body: {};
}> {
    get activeIcon(): string;
    get inactiveIcon(): string;
}
export type AccordionItemProps = typeof __propDef.props;
export type AccordionItemEvents = typeof __propDef.events;
export type AccordionItemSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        animation?: boolean;
        open?: boolean;
        disabled?: boolean;
        activeIcon?: string;
        inactiveIcon?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        body: {};
    };
};
export {};
