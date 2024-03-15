import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'prueba-tecnica-fd1e3',
          appId: '1:352884008732:web:d6fadbbe196bf2f86a3cd9',
          databaseURL:
            'https://prueba-tecnica-fd1e3-default-rtdb.firebaseio.com',
          storageBucket: 'prueba-tecnica-fd1e3.appspot.com',
          apiKey: 'AIzaSyB9rR4MLCAhzBzUH-Dp5aE_5Mvhf8Mztsk',
          authDomain: 'prueba-tecnica-fd1e3.firebaseapp.com',
          messagingSenderId: '352884008732',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
