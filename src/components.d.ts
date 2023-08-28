/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CmDrawer {
        "close": () => Promise<void>;
        "drawertitle": string;
        "open": () => Promise<void>;
        "opened": boolean;
    }
    interface CmTooltip {
        "message": string;
    }
}
declare global {
    interface HTMLCmDrawerElement extends Components.CmDrawer, HTMLStencilElement {
    }
    var HTMLCmDrawerElement: {
        prototype: HTMLCmDrawerElement;
        new (): HTMLCmDrawerElement;
    };
    interface HTMLCmTooltipElement extends Components.CmTooltip, HTMLStencilElement {
    }
    var HTMLCmTooltipElement: {
        prototype: HTMLCmTooltipElement;
        new (): HTMLCmTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "cm-drawer": HTMLCmDrawerElement;
        "cm-tooltip": HTMLCmTooltipElement;
    }
}
declare namespace LocalJSX {
    interface CmDrawer {
        "drawertitle"?: string;
        "opened"?: boolean;
    }
    interface CmTooltip {
        "message"?: string;
    }
    interface IntrinsicElements {
        "cm-drawer": CmDrawer;
        "cm-tooltip": CmTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cm-drawer": LocalJSX.CmDrawer & JSXBase.HTMLAttributes<HTMLCmDrawerElement>;
            "cm-tooltip": LocalJSX.CmTooltip & JSXBase.HTMLAttributes<HTMLCmTooltipElement>;
        }
    }
}
