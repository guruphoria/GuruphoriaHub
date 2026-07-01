import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/**
 * @fileOverview Universal Firebase initialization.
 * Robust implementation for both Client and Server environments.
 */

export function initializeFirebase() {
  let app: FirebaseApp;
  
  if (!getApps().length) {
    try {
      // Attempt to initialize via Firebase App Hosting environment variables (preferred in production)
      app = initializeApp();
    } catch (e) {
      // Fallback to config object for local development
      app = initializeApp(firebaseConfig);
    }
  } else {
    app = getApp();
  }

  return {
    firebaseApp: app,
    auth: getAuth(app),
    firestore: getFirestore(app)
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
