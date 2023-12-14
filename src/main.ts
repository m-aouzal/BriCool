import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing';
import { provideRouter } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimations(), BrowserModule]
}).catch((err) => console.error(err));
