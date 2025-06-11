import { Component, Host, Prop, h } from '@stencil/core';
import logo_inverted from '../../assets/siga-logo-white.svg';
import logo_regular from '../../assets/siga-logo-blue.svg';

@Component({
  tag: 'siga-logo',
  styleUrl: 'siga-logo.css',
  shadow: true,
})
export class SigaLogo {
  @Prop() variant: 'regular' | 'inverted' = 'regular';
  @Prop() height: string = '8mm';
  @Prop() altText: string = 'SIGA Logo';

  get logoSrc() {
    return this.variant == 'regular' ? logo_regular : logo_inverted;
  }

  get classList(): string {
    const classes = {
      'logo-container': true,
      'background': this.variant == 'inverted'
    };

    return Object.keys(classes).filter(k => classes[k]).join(' ');
  }

  render() {
    return (
      <Host
        style={{
          '--logo-height': this.height
        }}
      >
        <div class={this.classList}>
          <img src={this.logoSrc} alt={this.altText} />
        </div>
      </Host>
      
    );
  }
}
