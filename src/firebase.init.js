// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAd4cUP6Y5uQQu0MIgQsgW2Bw2XS3SHkS4",
    authDomain: "ema-john-simple-a5ac4.firebaseapp.com",
    projectId: "ema-john-simple-a5ac4",
    storageBucket: "ema-john-simple-a5ac4.appspot.com",
    messagingSenderId: "597250906514",
    appId: "1:597250906514:web:82d468c2e130274ad8c94b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;