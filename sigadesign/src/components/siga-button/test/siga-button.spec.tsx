import { newSpecPage } from '@stencil/core/testing';
import { SigaButton } from '../siga-button';

describe('siga-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SigaButton],
      html: `<siga-button></siga-button>`,
    });
    expect(page.root).toEqualHtml(`
      <siga-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </siga-button>
    `);
  });
});
