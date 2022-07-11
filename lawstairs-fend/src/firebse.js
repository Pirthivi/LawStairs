import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAL7xVDPdEOqpLPRYKPww2zTxGZZ-smwLc",
  authDomain: "lawstairs-2620e.firebaseapp.com",
  projectId: "lawstairs-2620e",
  storageBucket: "lawstairs-2620e.appspot.com",
  messagingSenderId: "1054243466294",
  appId: "1:1054243466294:web:84f35b29eb0dd668aebc97",
});

const storage = firebase.storage();

export { storage };
