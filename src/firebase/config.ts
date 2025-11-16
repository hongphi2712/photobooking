import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_O7dC6x92vbJUekydgpligg0nxTN7fVU",
  authDomain: "quan-ly-hoc-tap-a0d55.firebaseapp.com",
  projectId: "quan-ly-hoc-tap-a0d55",
  storageBucket: "quan-ly-hoc-tap-a0d55.firebasestorage.app",
  messagingSenderId: "797114762104",
  appId: "1:797114762104:web:f0e1c35256d6c1f190fe8d",
  measurementId: "G-NJW538XEFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;
