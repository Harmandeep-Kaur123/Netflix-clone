import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDduYizhOAxlculYNW09GGj15Z6IIK9nv4",
  authDomain: "mynetflix-2.firebaseapp.com",
  projectId: "mynetflix-2",
  storageBucket: "mynetflix-2.appspot.com",
  messagingSenderId: "644707791934",
  appId: "1:644707791934:web:16115ba4b5177209214d6f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth= firebase.auth();

export { auth };
export default db;