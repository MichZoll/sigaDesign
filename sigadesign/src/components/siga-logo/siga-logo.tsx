import { Component, Host, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'siga-logo',
  assetsDirs: ['assets'],
  styleUrl: 'siga-logo.css',
  shadow: true,
})
export class SigaLogo {
  @Prop() variant: 'original' | 'white' | 'black' = 'original';
  @Prop() height: string = '8mm';
  @Prop() altText: string = 'SIGA Logo';
  @Prop() orientation: 'vertical' | 'horizontal' = 'horizontal';

  get logoSrc() {
    let image;
    switch(this.variant) {
      case 'white':
        image = 'siga-logo-white.svg';
        break;
      case 'black':
        image = 'siga-logo-black.svg';
        break;
      default:
        image = 'siga-logo-blue.svg';
    }
    return getAssetPath(`./assets/${image}`)
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
