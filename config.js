import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export const firebaseConfig = {
//add config
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} 