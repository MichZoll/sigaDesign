import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'siga-button',
  styleUrl: 'siga-button.css',
  shadow: true,
})
export class SigaButton {
  @Prop() variant: 'blue' | 'white' | 'dark' | 'grey' = 'blue';
  @Prop() size: 'normal' | 'big' = 'normal';
  @Prop() disabled: boolean = false;
  @Prop() label?: string;
  @Prop() icon?: string; // expects a URL to SVG file or inline SVG string
  @Prop() iconOnly: boolean = false;

  render() {
    const hasText = !!this.label && !this.iconOnly;
    const hasIcon = !!this.icon;

    const classList = {
      btn: true,
      [`btn--${this.variant}`]: true,
      [`btn--${this.size}`]: true,
      'btn--disabled': this.disabled,
      'icon-only': this.iconOnly,
      'icon-with-text': hasText && hasIcon,
    };

    const isSvgPath = this.icon && this.icon.endsWith('.svg');

    return (
      <button
        class={Object.keys(classList).filter(k => classList[k]).join(' ')}
        disabled={this.disabled}
        aria-label={this.iconOnly && this.label ? this.label : undefined}
      >
        {hasIcon &&
          (isSvgPath ? (
            <img class="btn__icon" src={this.icon} alt="" />
          ) : (
            <span class="btn__icon" innerHTML={this.icon}></span>
          ))}
        {hasText && this.label}
      </button>
    );
  }
}
