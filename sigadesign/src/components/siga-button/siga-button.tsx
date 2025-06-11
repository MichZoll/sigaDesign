import { Component, Prop, h } from '@stencil/core';

export enum BUTTON_VARIANT {
  BLUE = 'blue',
  WHITE = 'white',
  DARK = 'dark',
  GREY = 'grey'
}

export enum BUTTON_SIZE {
  NORMAL = 'normal',
  BIG = 'big'
}

export enum ICON_MODE {
  NONE = 'none',
  YES = 'yes',
  ONLY = 'only'
}

@Component({
  tag: 'siga-button',
  styleUrl: 'siga-button.css',
  shadow: true,
})
export class SigaButton {
  @Prop() variant: BUTTON_VARIANT;
  @Prop() size: BUTTON_SIZE;
  @Prop() disabled: boolean = false;
  @Prop() label?: string;
  @Prop() icon?: string; // inline SVG string only. Potential vulnerability to Cross-Site Scripting (XSS)

  // runtime validation
  private static readonly allowedVariants = Object.values(BUTTON_VARIANT);
  private static readonly allowedSizes = Object.values(BUTTON_SIZE);


  // normalization
  get normalizedVariant(): BUTTON_VARIANT {
    return SigaButton.allowedVariants.includes(this.variant)
      ? this.variant
      : BUTTON_VARIANT.BLUE;
  }

  get normalizedSize(): BUTTON_SIZE {
    return SigaButton.allowedSizes.includes(this.size)
      ? this.size
      : BUTTON_SIZE.NORMAL;
  }

  get iconMode(): ICON_MODE{
    if (this.icon) {
      return this.label ? ICON_MODE.YES : ICON_MODE.ONLY;
    }
    return ICON_MODE.NONE;
  }

  get classList(): string {
    const classes = {
      btn: true,
      [`btn--${this.normalizedVariant}`]: true,
      [`btn--${this.normalizedSize}`]: true,
      'btn--disabled': this.disabled,
      [`btn--icon-${this.iconMode}`]: true,
    };

    return Object.keys(classes).filter(k => classes[k]).join(' ');
  }

render() {
    return (
      <button class={this.classList} disabled={this.disabled}>
        {this.icon && <span class="btn__icon" innerHTML={this.icon}></span>}
        {this.label && <span class="btn__label">{this.label}</span>}
      </button>
    );
  }
}
