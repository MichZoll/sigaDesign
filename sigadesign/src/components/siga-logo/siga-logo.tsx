import { Component, Host, Prop, h } from '@stencil/core';
import logo_original from '../../assets/siga-logo-blue.svg';
import logo_white from '../../assets/siga-logo-white.svg';
import logo_black from '../../assets/siga-logo-black.svg';

@Component({
  tag: 'siga-logo',
  styleUrl: 'siga-logo.css',
  shadow: true,
})
export class SigaLogo {
  @Prop() variant: 'original' | 'white' | 'black' = 'original';
  @Prop() height: string = '8mm';
  @Prop() altText: string = 'SIGA Logo';
  @Prop() orientation: 'vertical' | 'horizontal' = 'horizontal';

  get logoSrc() {
    switch(this.variant) {
      case 'white':
        return logo_white;
      case 'black':
        return logo_black;
      default:
        return logo_original;
    }
  }

  get background() {
    switch(this.variant) {
      case 'white':
        return 'blue'
      case 'black':
        return 'white'
      default:
        return 'white'
    }
  }

  get classList(): string {
    const classes = {
      'logo-container': true,
      'background': this.background == 'blue',
      'vertical': this.orientation == 'vertical'
    };

    return Object.keys(classes).filter(k => classes[k]).join(' ');
  }

  render() {
    return (
      <Host
        style={{
          '--logo-height-raw': this.height
        }}
      >
        <div class={this.classList}>
          <img src={this.logoSrc} alt={this.altText} />
        </div>
      </Host>
      
    );
  }
}
