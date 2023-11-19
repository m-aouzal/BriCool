import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';



import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
providers: [provideAnimations(),AppRoutingModule,BrowserModule],
}).catch((err) => console.error(err));
