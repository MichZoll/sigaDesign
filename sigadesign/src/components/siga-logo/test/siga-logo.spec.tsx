import { newSpecPage } from '@stencil/core/testing';
import { SigaLogo } from '../siga-logo';

describe('siga-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SigaLogo],
      html: `<siga-logo></siga-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <siga-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </siga-logo>
    `);
  });
});
