// import {initializeApp} from 'firebase/app';
// import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore/lite';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyDYEg6Zzt25MED1jEt5vjUlQXJDEc7oeWo',
  authDomain: 'react-native-b8468.firebaseapp.com',
  projectId: 'react-native-b8468',
  storageBucket: 'react-native-b8468.appspot.com',
  messagingSenderId: '172383194069',
  appId: '1:172383194069:web:a2c2a00991c2d9434ecb5c',
  measurementId: 'G-MZWS1LZELJ',
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
