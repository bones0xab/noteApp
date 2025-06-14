import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const firebaseConfig = {
  apiKey: "AIzaSyDBX_JlmaWcHM1EQSzmk6VLGmgklM59abY",
  authDomain: "testangular-2f818.firebaseapp.com",
  projectId: "testangular-2f818",
  storageBucket: "testangular-2f818.firebasestorage.app",
  messagingSenderId: "888581389222",
  appId: "1:888581389222:web:454bef75d0e418b4902d67",
  measurementId: "G-L9DHBHQM1E"
};



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
