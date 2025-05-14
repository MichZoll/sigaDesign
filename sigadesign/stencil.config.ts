import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'sigadesign',
  outputTargets: [
    { 
      type: 'dist', 
      esmLoaderPath: '../loader'
    },
    vueOutputTarget({
      componentCorePackage: 'your-lib',
      proxiesFile: '../vue-wrappers/src/components.ts',
      // optional: configure v-model proxies here
    }),
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
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
