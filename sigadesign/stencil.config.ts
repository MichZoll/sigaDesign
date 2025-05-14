import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sigadesign',
  outputTargets: [
    { 
      type: 'dist', 
      esmLoaderPath: '../loader'
    }]
};
