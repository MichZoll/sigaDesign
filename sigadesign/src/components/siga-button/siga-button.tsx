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
  @Prop() icon?: string; // inline SVG string only

  render() {
    const iconModeClass = this.icon ? (this.label ? 'yes' : 'only') : 'none';

    const classList = {
      btn: true,
      [`btn--${this.variant}`]: true,
      [`btn--${this.size}`]: true,
      'btn--disabled': this.disabled,
      [`btn--icon-${iconModeClass}`]: true,
    };

    return (
      <button class={Object.keys(classList).filter(k => classList[k]).join(' ')} disabled={this.disabled}>
        {this.icon && <span class="btn__icon" innerHTML={this.icon}></span>}
        {this.label && <span class="btn__label">{this.label}</span>}
      </button>
    );
  }
}
