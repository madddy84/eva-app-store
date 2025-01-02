import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Import the necessary Firebase modules

// Your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyAAxPsqyIRUGT1VAqPPpkgRdk2EBbTqxUw",
  authDomain: "evaappstore-fbc91.firebaseapp.com",
  projectId: "evaappstore-fbc91",
  storageBucket: "evaappstore-fbc91.firebasestorage.app",
  messagingSenderId: "201341574765",
  appId: "1:201341574765:web:2417a955d184c6a3c52964",
  measurementId: "G-7XJ45E5XDN"
};

// Initialize Firebase
 const cong = initializeApp(firebaseConfig);

  export default cong;
// Now you can use Firebase services in your React app!