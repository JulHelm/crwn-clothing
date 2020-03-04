import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC28ou5OEUh8JkjxIMMRj5s9d6-lqeAzug',
  authDomain: 'crwn-db-e6ecf.firebaseapp.com',
  databaseURL: 'https://crwn-db-e6ecf.firebaseio.com',
  projectId: 'crwn-db-e6ecf',
  storageBucket: 'crwn-db-e6ecf.appspot.com',
  messagingSenderId: '990855841631',
  appId: '1:990855841631:web:2d2c120f5efc00fb51d8ea',
  measurementId: 'G-HHVQ7T6576'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  } else {
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
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
