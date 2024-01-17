import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing';
import { provideRouter } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { importProvidersFrom } from '@angular/core';
import { getAuth, provideAuth } from '@angular/fire/auth';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    BrowserModule,
    HttpClientModule,
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'bricool-ginf',
          appId: '1:160115731845:web:171092878c4d83baf1e8ec',
          databaseURL: 'https://bricool-ginf-default-rtdb.firebaseio.com',
          storageBucket: 'bricool-ginf.appspot.com',
          apiKey: 'AIzaSyBp9w4oil77XT3FYITOpZrQ5Iozpq4y3_g',
          authDomain: 'bricool-ginf.firebaseapp.com',
          messagingSenderId: '160115731845',
          measurementId: 'G-75LJXWH7CW',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
  ],
}).catch((err) => console.error(err));
