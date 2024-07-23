import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

const bootstrap = () => bootstrapApplication(AppComponent, {
  ...config,
  providers: [
    provideRouter(routes)
  ]
});

export default bootstrap;

bootstrap()
  .catch((err) => console.error(err));
