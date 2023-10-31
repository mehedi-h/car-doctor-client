// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.ITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  apiKey: "AIzaSyDtYyplabM0ok8TrG5my6MvdxwpRWeKGI4",
  authDomain: "car-doctor-acc37.firebaseapp.com",
  projectId: "car-doctor-acc37",
  storageBucket: "car-doctor-acc37.appspot.com",
  messagingSenderId: "86970658131",
  appId: "1:86970658131:web:b1900b0b8f7ce40ddf85a6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtYyplabM0ok8TrG5my6MvdxwpRWeKGI4",
  authDomain: "car-doctor-acc37.firebaseapp.com",
  projectId: "car-doctor-acc37",
  storageBucket: "car-doctor-acc37.appspot.com",
  messagingSenderId: "86970658131",
  appId: "1:86970658131:web:b1900b0b8f7ce40ddf85a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/