import {initializeApp} from 'firebase/app';
import {getFirestore, collection, addDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBbuLtbrN8MGmemlz9d5Fq8HuMkcZX4asQ',
  authDomain: 'react-native-54f31.firebaseapp.com',
  projectId: 'react-native-54f31',
  storageBucket: 'react-native-54f31.appspot.com',
  messagingSenderId: '521194940554',
  appId: '1:521194940554:web:8ef4c08c09eab4e5f02573',
  measurementId: 'G-0FBMKXB9TX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db, getFirestore, collection, addDoc};
