import { Component, Prop, h, Host } from '@stencil/core';

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
  @Prop() icon?: string; // icon can be a path, name, or inline SVG string
  @Prop() iconOnly: boolean = false;

  render() {
    const classList = {
      btn: true,
      [`btn--${this.variant}`]: true,
      [`btn--${this.size}`]: true,
      'btn--disabled': this.disabled,
      'icon-only': this.iconOnly,
    };

    return (
      <button
        class={Object.keys(classList).filter(k => classList[k]).join(' ')}
        disabled={this.disabled}
        aria-label={this.iconOnly && this.label ? this.label : undefined}
      >
        {this.icon && (
          <span class="btn__icon" innerHTML={this.icon}></span>
        )}
        {!this.iconOnly && this.label}
      </button>
    );
  }
}
