import { Component, Prop, h } from '@stencil/core';

export enum ButtonVariant {
  BLUE = 'blue',
  WHITE = 'white',
  DARK = 'dark',
  GREY = 'grey'
}

export enum ButtonSize {
  NORMAL = 'normal',
  BIG = 'big'
}

export enum IconModeClass {
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
  @Prop() variant: ButtonVariant;
  @Prop() size: ButtonSize;
  @Prop() disabled: boolean = false;
  @Prop() label?: string;
  @Prop() icon?: string; // inline SVG string only

  // runtime validation
  private static readonly allowedVariants = Object.values(ButtonVariant);
  private static readonly allowedSizes = Object.values(ButtonSize);


  // normalization
  get normalizedVariant(): ButtonVariant {
    return SigaButton.allowedVariants.includes(this.variant)
      ? this.variant
      : ButtonVariant.BLUE;
  }

  get normalizedSize(): ButtonSize {
    return SigaButton.allowedSizes.includes(this.size)
      ? this.size
      : ButtonSize.NORMAL;
  }

  get iconModeClass(): IconModeClass{
    if (this.icon) {
      return this.label ? IconModeClass.YES : IconModeClass.ONLY;
    }
    return IconModeClass.NONE;
  }

  get classList(): string {
    const classes = {
      btn: true,
      [`btn--${this.normalizedVariant}`]: true,
      [`btn--${this.normalizedSize}`]: true,
      'btn--disabled': this.disabled,
      [`btn--icon-${this.iconModeClass}`]: true,
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
