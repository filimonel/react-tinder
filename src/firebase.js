import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAPvDO10vog_RLG4HML6R6gw9qvInJj9BQ",
  authDomain: "tinder-clone-999a6.firebaseapp.com",
  projectId: "tinder-clone-999a6",
  storageBucket: "tinder-clone-999a6.appspot.com",
  messagingSenderId: "345406820201",
  appId: "1:345406820201:web:9dbb800f5b26d94b25b7f8",
  measurementId: "G-H1DTGTSBE5",
};

// Connecting firebase to react
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
