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

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
      });
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account " });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
