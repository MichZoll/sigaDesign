import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'siga-button',
  styleUrl: 'siga-button.css',
  shadow: true,
})
export class SigaButton {
  @Prop() label: string;

  render() {
    return <button>{this.label}</button>;
  }
}
