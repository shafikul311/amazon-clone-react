import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyAWOA5izqy-TTJbKXwhfq-SXAkPx0ZIlRY",
   authDomain: "clone-a351a.firebaseapp.com",
   projectId: "clone-a351a",
   storageBucket: "clone-a351a.appspot.com",
   messagingSenderId: "936348483317",
   appId: "1:936348483317:web:db56306b9dccb8cde90fbc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
