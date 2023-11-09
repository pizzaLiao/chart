// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0bxaay3Hu2ZVD4iEZ3EzL9LFzi1wt3AM",
  authDomain: "test-login-8e8b9.firebaseapp.com",
  projectId: "test-login-8e8b9",
  storageBucket: "test-login-8e8b9.appspot.com",
  messagingSenderId: "394208651123",
  appId: "1:394208651123:web:d475a8c8e1db2621b30706",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
