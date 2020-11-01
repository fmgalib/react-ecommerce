import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVTc7dlrpzlBrd2Nw7F5z9qHwd3vZLF5w",
    authDomain: "reactecommerce-db.firebaseapp.com",
    databaseURL: "https://reactecommerce-db.firebaseio.com",
    projectId: "reactecommerce-db",
    storageBucket: "reactecommerce-db.appspot.com",
    messagingSenderId: "832249503781",
    appId: "1:832249503781:web:1f4e894080f4b3802d5fcc"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;