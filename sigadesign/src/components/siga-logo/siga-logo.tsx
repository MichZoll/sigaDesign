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
  @Prop() width: string = 'auto';
  @Prop() height: string = 'auto';
  @Prop() altText: string = 'SIGA Logo';

  get logoSrc() {
    return this.variant == 'regular' ? logo_regular : logo_inverted;
  }

  get backgroundColor() {
    return this.variant === 'regular' ? 'transparent' : '#0091D4';
  }

  get classList(): string {
    const classes = {
      logo: true,
      background: this.variant == 'inverted'
    };

    return Object.keys(classes).filter(k => classes[k]).join(' ');
  }

  render() {
    return (
      <div class={this.classList}>
        <img src={this.logoSrc} alt={this.altText} />
      </div>
    );
  }
}
