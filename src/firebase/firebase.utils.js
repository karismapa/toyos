import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDfF3zq9ZaVLQs6cQEgd9ZGNuOO86iCesM",
  authDomain: "toyos-db.firebaseapp.com",
  projectId: "toyos-db",
  storageBucket: "toyos-db.appspot.com",
  messagingSenderId: "470413223825",
  appId: "1:470413223825:web:d740da876a5c88fb031c30",
  measurementId: "G-PKTDNVLER4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
