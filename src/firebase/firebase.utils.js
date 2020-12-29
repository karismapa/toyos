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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch(err) {
      console.log(err)
    }
  }


  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
