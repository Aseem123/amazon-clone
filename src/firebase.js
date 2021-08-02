import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6CLOgvmfEynVum-J8JMzedwgiEw40l7U",
  authDomain: "clone-ea400.firebaseapp.com",
  projectId: "clone-ea400",
  storageBucket: "clone-ea400.appspot.com",
  messagingSenderId: "677292062568",
  appId: "1:677292062568:web:667a561d0d6eb2227b88dd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
