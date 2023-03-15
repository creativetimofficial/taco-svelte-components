/** @typedef {typeof __propDef.props}  AccordionContainerProps */
/** @typedef {typeof __propDef.events}  AccordionContainerEvents */
/** @typedef {typeof __propDef.slots}  AccordionContainerSlots */
export default class AccordionContainer extends SvelteComponentTyped<{
    multiple?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type AccordionContainerProps = typeof __propDef.props;
export type AccordionContainerEvents = typeof __propDef.events;
export type AccordionContainerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        multiple?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
