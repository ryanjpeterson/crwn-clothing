import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBjc1mKD7NHykRPHE_2IF6YFAtZjNIw-H8",
  authDomain: "crwn-clothing-8bc94.firebaseapp.com",
  databaseURL: "https://crwn-clothing-8bc94.firebaseio.com",
  projectId: "crwn-clothing-8bc94",
  storageBucket: "crwn-clothing-8bc94.appspot.com",
  messagingSenderId: "922024660427",
  appId: "1:922024660427:web:d70294ff20e64be60d7a4e",
  measurementId: "G-EDSF9FHNFB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account " });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
