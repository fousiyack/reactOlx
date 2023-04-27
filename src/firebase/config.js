import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_R8WUyTVhJ24d9temmkd8Vqt245-SZjE",
    authDomain: "olx-clone-89f2e.firebaseapp.com",
    projectId: "olx-clone-89f2e",
    storageBucket: "olx-clone-89f2e.appspot.com",
    messagingSenderId: "420619803829",
    appId: "1:420619803829:web:771860512080cab34cb2fc",
    measurementId: "G-SB1FJV9NTQ"
  };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


export default firebase.initializeApp(firebaseConfig)