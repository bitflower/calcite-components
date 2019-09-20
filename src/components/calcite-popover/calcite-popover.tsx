import {
  Component,
  Element,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";

import { CSS } from "./resources";

import Popper from "popper.js";

@Component({
  tag: "calcite-popover",
  styleUrl: "calcite-popover.scss",
  shadow: true
})
export class CalcitePopover {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Display and position the component.
   */
  @Prop({ reflect: true }) open = false;

  @Watch("open")
  openHandler(open: boolean) {
    if (open) {
      this.reposition();
    } else {
      this.destroyPopper();
    }
  }

  /**
   * Determines where the element will be positioned.
   * horizontal: Positioned to the left or right of the referenceElement.
   * vertical: Positioned above or below the referenceElement.
   */
  @Prop({ reflect: true }) placement: "horizontal" | "vertical" = "horizontal";

  @Watch("placement")
  placementHandler() {
    this.reposition();
  }

  /**
   * Reference HTMLElement used to position this component according to the placement property.
   */
  @Prop() referenceElement: HTMLElement;

  @Watch("referenceElement")
  referenceElementHandler() {
    this.destroyPopper();
    this.reposition();
  }

  /**
   * Offset the position of the popover in the horizontal direction.
   */
  @Prop({ reflect: true }) xOffset = 0;

  @Watch("xOffset")
  xOffsetHandler() {
    this.reposition();
  }

  /**
   * Offset the position of the popover in the vertical direction.
   */
  @Prop({ reflect: true }) yOffset = 0;

  @Watch("yOffset")
  yOffsetHandler() {
    this.reposition();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalcitePopoverElement;

  @State() popper: Popper;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentDidLoad() {
    this.reposition();
  }

  componentDidUnload() {
    this.destroyPopper();
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async reposition(): Promise<void> {
    const { popper } = this;

    popper ? this.updatePopper(popper) : this.createPopper();
  }

  @Method() async toggle(): Promise<void> {
    this.open = !this.open;
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  getPlacement(): Popper.Placement {
    return this.placement === "vertical" ? "bottom-start" : "auto-start";
  }

  getModifiers(): Popper.Modifiers {
    const { xOffset, yOffset } = this;
    const offsetEnabled = !!(yOffset || xOffset);
    const offset = `${yOffset}, ${xOffset}`;

    return {
      hide: {
        enabled: false
      },
      offset: {
        enabled: offsetEnabled,
        offset
      },
      preventOverflow: {
        enabled: false
      }
    };
  }

  createPopper(): void {
    const { el, open, referenceElement } = this;

    if (!referenceElement || !open) {
      return;
    }

    const newPopper = new Popper(referenceElement, el, {
      eventsEnabled: false,
      placement: this.getPlacement(),
      modifiers: this.getModifiers(),
      onCreate: data => {
        if (
          data.originalPlacement === "bottom-start" &&
          document.body.clientWidth &&
          data.offsets &&
          data.offsets.reference &&
          data.offsets.reference.left > document.body.clientWidth / 2
        ) {
          data.instance.options.placement = "bottom-end";
          data.instance.scheduleUpdate();
        }
      }
    });

    window.addEventListener("resize", newPopper.scheduleUpdate, {
      passive: true
    });

    this.popper = newPopper;
  }

  updatePopper(popper: Popper): void {
    popper.options.placement = this.getPlacement();
    popper.options.modifiers = {
      ...popper.options.modifiers,
      ...this.getModifiers()
    };
    popper.scheduleUpdate();
  }

  destroyPopper(): void {
    const { popper } = this;

    if (popper) {
      window.removeEventListener("resize", popper.scheduleUpdate);
      popper.destroy();
    }

    this.popper = null;
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <div
          class={{
            [CSS.container]: true,
            [CSS.containerOpen]: this.open
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}