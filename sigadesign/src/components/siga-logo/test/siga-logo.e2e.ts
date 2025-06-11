import { newE2EPage } from '@stencil/core/testing';

describe('siga-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<siga-logo></siga-logo>');

    const element = await page.find('siga-logo');
    expect(element).toHaveClass('hydrated');
  });
});
