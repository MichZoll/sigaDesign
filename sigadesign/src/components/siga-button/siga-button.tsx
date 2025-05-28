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
  @Prop() icon?: string; // path to SVG or inline
  @Prop() iconMode: 'none' | 'yes' | 'only' = 'none';

  render() {
    const classList = {
      btn: true,
      [`btn--${this.variant}`]: true,
      [`btn--${this.size}`]: true,
      'btn--disabled': this.disabled,
      [`btn--icon-${this.iconMode}`]: true,
    };

    const isSvgPath = this.icon && this.icon.endsWith('.svg');

    return (
      <button class={Object.keys(classList).filter(k => classList[k]).join(' ')} disabled={this.disabled}>
        {this.iconMode !== 'none' &&
          (isSvgPath ? (
            <img src={this.icon} class="btn__icon" alt="" />
          ) : (
            <span class="btn__icon" innerHTML={this.icon}></span>
          ))}
        {this.iconMode !== 'only' && this.label && <span class="btn__label">{this.label}</span>}
      </button>
    );
  }
}
