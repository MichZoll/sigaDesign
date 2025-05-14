import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'sigadesign',
  outputTargets: [
    { 
      type: 'dist', 
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false
    },
    vueOutputTarget({
      componentCorePackage: 'sigadesign',
      proxiesFile: '../vue-app/src/components/stencil-components.ts',
      includeDefineCustomElements: true,
      loaderDir: '../loader'    
    }),
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
