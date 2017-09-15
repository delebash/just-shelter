import routes from '../services/routes'
import 'bootstrap'
// Load routes from /config/config.routes
export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map(routes);
    config.mapUnknownRoutes("viewmodels/notfound");
    this.router = router;
  }
}
