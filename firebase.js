// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPvDO10vog_RLG4HML6R6gw9qvInJj9BQ",
  authDomain: "tinder-clone-999a6.firebaseapp.com",
  projectId: "tinder-clone-999a6",
  storageBucket: "tinder-clone-999a6.appspot.com",
  messagingSenderId: "345406820201",
  appId: "1:345406820201:web:9dbb800f5b26d94b25b7f8",
  measurementId: "G-H1DTGTSBE5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
