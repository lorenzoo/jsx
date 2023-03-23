// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyAejhSW6DCcUdjNxALgggPBrykJXyEs5Fo',
  authDomain: 'cursojsx.firebaseapp.com',
  projectId: 'cursojsx',
  storageBucket: 'cursojsx.appspot.com',
  messagingSenderId: '630298958999',
  appId: '1:630298958999:web:bedc416395f8fb656f1dd2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

