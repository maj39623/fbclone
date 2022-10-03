import * as firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqbJ7YLBV5hpL5L2nNFV5AIIU2J1c1VW8",
  authDomain: "facebook-clone-7f287.firebaseapp.com",
  projectId: "facebook-clone-7f287",
  storageBucket: "facebook-clone-7f287.appspot.com",
  messagingSenderId: "944165849295",
  appId: "1:944165849295:web:34fe23cd1a6b876bddcfba",
};

const app = !firebase.apps
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore;
const storage = firebase.storage;

export { db, storage };
