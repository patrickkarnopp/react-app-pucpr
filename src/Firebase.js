import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCevcx2B97orkCEgeOU5iseJSupQE1stm4",
  authDomain: "projetoead-a05b2.firebaseapp.com",
  projectId: "projetoead-a05b2",
  storageBucket: "projetoead-a05b2.firebasestorage.app",
  messagingSenderId: "473263728261",
  appId: "1:473263728261:web:5f198b233285671a27ebec"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;