/** @typedef {typeof __propDef.props}  CarouselProps */
/** @typedef {typeof __propDef.events}  CarouselEvents */
/** @typedef {typeof __propDef.slots}  CarouselSlots */
export default class Carousel extends SvelteComponentTyped<{
    color?: string;
    size?: string;
    images?: any[];
    colorActive?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CarouselProps = typeof __propDef.props;
export type CarouselEvents = typeof __propDef.events;
export type CarouselSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        color?: string;
        size?: string;
        images?: any[];
        colorActive?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
