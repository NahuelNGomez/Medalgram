// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8qjt3F8IdIf2N4X_I-MRd0Em5KBwUgYA",
  authDomain: "tdd-medallero.firebaseapp.com",
  projectId: "tdd-medallero",
  storageBucket: "tdd-medallero.appspot.com",
  messagingSenderId: "213219555380",
  appId: "1:213219555380:web:0ec944cd90ab4b77233261",
  measurementId: "G-NC863M43RT"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;