import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHrVAEPO1SiZXwGSRK9aum5Ab9c_MXR6k",
  authDomain: "lawsta-baa57.firebaseapp.com",
  projectId: "lawsta-baa57",
  storageBucket: "lawsta-baa57.appspot.com",
  messagingSenderId: "413724797283",
  appId: "1:413724797283:web:166a804d2f3469c94b0b56",
});

const storage = firebase.storage();

export { storage };
