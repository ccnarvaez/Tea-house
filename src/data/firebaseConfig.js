// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYa4dGH_gzsdZYYIQT81IJOwer0hF4cZE",
  authDomain: "para-8ecac.firebaseapp.com",
  databaseURL: "https://para-8ecac-default-rtdb.firebaseio.com",
  projectId: "para-8ecac",
  storageBucket: "para-8ecac.appspot.com",
  messagingSenderId: "687474043638",
  appId: "1:687474043638:web:bd4e1b18bebd1835c41ad7",
  measurementId: "G-XHECNEP1NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);