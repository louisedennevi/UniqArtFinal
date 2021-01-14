import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB3gzVghWYFWdaT_JUt0Bu9p-hYu_xMDzQ",
    authDomain: "uniqart-d89a5.firebaseapp.com",
    databaseURL: "https://uniqart-d89a5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "uniqart-d89a5",
    storageBucket: "uniqart-d89a5.appspot.com",
    messagingSenderId: "248961533032",
    appId: "1:248961533032:web:4d5a7fba2a90a0fc8227dd"
  };
  
  firebase.initializeApp(firebaseConfig);

  // utils

  const db = firebase.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()


  // collection ref

  const usersCollection = db.collection("users")


export {
    db, auth, storage, usersCollection
}