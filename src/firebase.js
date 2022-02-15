// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcGk9NOvAYpfsUhqI-cUnBO8jgVZAI5lg",
  authDomain: "fitness-app-2c80c.firebaseapp.com",
  projectId: "fitness-app-2c80c",
  storageBucket: "fitness-app-2c80c.appspot.com",
  messagingSenderId: "616389417233",
  appId: "1:616389417233:web:196c714b2aefcf5bc014b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
const auth = getAuth();

// state observer
const checkForUser = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// google auth
const provider = new GoogleAuthProvider();




export {
    checkForUser,
    auth,
    app,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    provider,
    GoogleAuthProvider,
    signInWithPopup,
}