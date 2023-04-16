import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQWH4CFKy9ao3mX9je2XgRiY-LbHWP-b4",
  authDomain: "yf-9-929f0.firebaseapp.com",
  projectId: "yf-9-929f0",
  storageBucket: "yf-9-929f0.appspot.com",
  messagingSenderId: "601485347160",
  appId: "1:601485347160:web:505fa95e9610505d02bd2d",
  measurementId: "G-18RYJW40MC"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db=getFirestore(app);

