
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAFuyqCh_PDb9mes9_q8BkJlhZ3NTLIn9I",
  authDomain: "disneyplus-clone-d7b78.firebaseapp.com",
  databaseURL: "https://disneyplus-clone-d7b78-default-rtdb.firebaseio.com",
  projectId: "disneyplus-clone-d7b78",
  storageBucket: "disneyplus-clone-d7b78.appspot.com",
  messagingSenderId: "326238132767",
  appId: "1:326238132767:web:96dd4b4bdfb9f06a62932a",
  measurementId: "G-1CJBK10DVY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;