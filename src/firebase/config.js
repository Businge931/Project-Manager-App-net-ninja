import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyktN0j-q-eMBpZ0-Hc7UfqQ8gorcYJ4c",
  authDomain: "project-manager-net-ninja.firebaseapp.com",
  projectId: "project-manager-net-ninja",
  storageBucket: "project-manager-net-ninja.appspot.com",
  messagingSenderId: "668756618199",
  appId: "1:668756618199:web:a119b33c43f6f66c853992",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timestamp, projectStorage };
