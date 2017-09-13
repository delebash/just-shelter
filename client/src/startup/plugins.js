//import Backend from 'i18next-xhr-backend';
import environment from '../environment';

export function configurePlugins(aurelia, globalConfig) {
  if (environment.testing) {
    aurelia.use
      .plugin('aurelia-testing');
  }

  aurelia.use
    .plugin('aurelia-syncfusion-bridge', (syncfusion) => syncfusion.useAll())
    .plugin('aurelia-animator-css');
}
