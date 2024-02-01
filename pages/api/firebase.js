// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDEtpAQKrw8VU5BvCOXriyFGYsO8p1DoLo",
    authDomain: "falcondocs-bc034.firebaseapp.com",
    databaseURL: "https://falcondocs-bc034-default-rtdb.firebaseio.com",
    projectId: "falcondocs-bc034",
    storageBucket: "falcondocs-bc034.appspot.com",
    messagingSenderId: "823382637921",
    appId: "1:823382637921:web:e45472a220cf7794635920",
    measurementId: "G-QH8NR1WT1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);