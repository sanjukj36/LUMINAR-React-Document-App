// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABEQ9Oej17DIbVNV8RzncU_QLeWLSxJhs",
  authDomain: "react-document-app.firebaseapp.com",
  projectId: "react-document-app",
  storageBucket: "react-document-app.appspot.com",
  messagingSenderId: "77126692573",
  appId: "1:77126692573:web:95041ab39a00a425d3b534",
  measurementId: "G-S7BDDV15RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
