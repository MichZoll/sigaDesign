import { newE2EPage } from '@stencil/core/testing';

describe('siga-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<siga-button></siga-button>');

    const element = await page.find('siga-button');
    expect(element).toHaveClass('hydrated');
  });
});
