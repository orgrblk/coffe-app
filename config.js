import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyDRhFkbXhaXj2pZ_xOpkzZ3CG9O7UPPoMk",
  authDomain: "coffee-app-db5a6.firebaseapp.com",
  projectId: "coffee-app-db5a6",
  storageBucket: "coffee-app-db5a6.appspot.com",
  messagingSenderId: "542600158669",
  appId: "1:542600158669:web:4e047ee2d3b03d80b8f884",
  measurementId: "G-BP6D5PNTGD"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} 