import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyBTbYy1jcWCdwsnM2ZfM7gplpVuKIsIeto",
    authDomain: "todolist-53d01.firebaseapp.com",
    projectId: "todolist-53d01",
    storageBucket: "todolist-53d01.appspot.com",
    messagingSenderId: "190762753392",
    appId: "1:190762753392:web:355e2adf83c76860f003b5"
  };
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore()
export default app;
