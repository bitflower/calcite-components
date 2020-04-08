'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-afc57de2.js');
const dom = require('./dom-581e28c5.js');

const CSS = {
    close: 'close'
};
const TEXT = {
    close: 'close'
};

const calciteChipCss = ":host([hidden]){display:none}:host([scale=xs]){font-size:10px;--calcite-chip-spacing-unit-l:8px;--calcite-chip-spacing-unit-s:4px}:host([scale=s]){font-size:12px;--calcite-chip-spacing-unit-l:12px;--calcite-chip-spacing-unit-s:8px}:host([scale=m]){font-size:14px;--calcite-chip-spacing-unit-l:16px;--calcite-chip-spacing-unit-s:12px}:host([scale=l]){font-size:16px;--calcite-chip-spacing-unit-l:20px;--calcite-chip-spacing-unit-s:16px}:host([scale=xl]){font-size:18px;--calcite-chip-spacing-unit-l:24px;--calcite-chip-spacing-unit-s:20px}:host{--calcite-chip-button-border-radius:0 50px 50px 0;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;justify-self:center;background-color:var(--calcite-ui-background);border-radius:50px;color:var(--calcite-ui-text-1);font-weight:500}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}:host([dir=rtl]){--calcite-chip-button-border-radius:50px 0 0 50px;text-align:right}:host span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l)}:host([dir=rtl]) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s)}:host button{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-item-align:stretch;align-self:stretch;-webkit-appearance:none;background-color:transparent;margin:0;padding:0;border-radius:var(--calcite-chip-button-border-radius);border:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;padding:var(--calcite-chip-spacing-unit-s);cursor:pointer;color:var(--calcite-ui-text-1)}:host button:hover,:host button:focus{background-color:var(--calcite-ui-foreground-2);border-color:var(--calcite-ui-foreground-2)}:host button:active{background-color:var(--calcite-ui-foreground-3)}:host slot[name=chip-image]{display:-ms-inline-flexbox;display:inline-flex}:host slot[name=chip-image]::slotted(*){border-radius:50%;height:100%}.calcite-chip--icon{display:-ms-inline-flexbox;display:inline-flex;margin:0 0 0 var(--calcite-chip-spacing-unit-l);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;border-radius:var(--calcite-chip-button-border-radius);cursor:pointer}:host([dir=rtl]) .calcite-chip--icon{margin:0 var(--calcite-chip-spacing-unit-l) 0 0}";

const CalciteChip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** specify the scale of the chip, defaults to m */
        this.scale = "m";
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.closeClickHandler = (event) => {
            event.preventDefault();
            this.calciteChipDismiss.emit(this.el);
        };
        this.calciteChipDismiss = index.createEvent(this, "calciteChipDismiss", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        let scale = ["xs", "s", "m", "l", "xl"];
        if (!scale.includes(this.scale))
            this.scale = "m";
    }
    render() {
        const dir = dom.getElementDir(this.el);
        const iconScale = this.scale === "xs" || this.scale === "s" || this.scale === "m"
            ? "s"
            : this.scale === "l"
                ? "m"
                : "l";
        const iconEl = (index.h("calcite-icon", { class: "calcite-chip--icon", icon: this.icon, scale: iconScale }));
        return (index.h(index.Host, { dir: dir }, this.icon ? iconEl : null, index.h("slot", { name: "chip-image" }), index.h("span", null, index.h("slot", null)), index.h("button", { onClick: this.closeClickHandler, class: CSS.close, title: TEXT.close }, index.h("calcite-icon", { scale: iconScale, icon: "x" }))));
    }
    get el() { return index.getElement(this); }
};
CalciteChip.style = calciteChipCss;

exports.calcite_chip = CalciteChip;
