import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean);

export type FirebaseInitError = { code: string; message: string; details?: string } | null;

let _firebaseInitError: FirebaseInitError = null;
let _firebaseApp: FirebaseApp | null = null;
let _auth: Auth | null = null;
let _db: Firestore | null = null;
let _storage: FirebaseStorage | null = null;

if (!isFirebaseConfigured) {
  _firebaseInitError = {
    code: "NO_DB_CONFIG",
    message: "Missing Firebase configuration. Set required VITE_FIREBASE_* environment variables.",
  };
  console.error("Firebase init error:", _firebaseInitError);
} else {
  try {
    _firebaseApp = initializeApp(firebaseConfig);
    _auth = getAuth(_firebaseApp);
    _db = getFirestore(_firebaseApp);
    _storage = getStorage(_firebaseApp);
  } catch (err) {
    _firebaseInitError = {
      code: "INIT_ERROR",
      message: err instanceof Error ? err.message : String(err),
    };
    console.error("Firebase initialization failed:", err);
  }
}

export const firebaseInitError = _firebaseInitError;
export const firebaseApp: FirebaseApp | null = _firebaseApp;
export const auth: Auth | null = _auth;
export const db: Firestore | null = _db;
export const storage: FirebaseStorage | null = _storage;
