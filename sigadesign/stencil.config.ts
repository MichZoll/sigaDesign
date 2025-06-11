import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sigadesign',
  globalStyle: 'src/global/app.css',
  outputTargets: [
    { 
      type: 'dist', 
      esmLoaderPath: '../loader'
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [{ src: 'assets' }]
    },
  ]
};
