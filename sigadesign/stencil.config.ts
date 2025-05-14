import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'sigadesign',
  outputTargets: [
    { 
      type: 'dist', 
      esmLoaderPath: '../loader'
    }]
};
