import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBGRyW_gqJFvQyR2HV47tkjYNLanPbUHHA",
    authDomain: "crwn-db-9a1ef.firebaseapp.com",
    databaseURL: "https://crwn-db-9a1ef.firebaseio.com",
    projectId: "crwn-db-9a1ef",
    storageBucket: "crwn-db-9a1ef.appspot.com",
    messagingSenderId: "458019354909",
    appId: "1:458019354909:web:9346a0df47d0f0ac00c9f4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;