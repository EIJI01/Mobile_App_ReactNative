import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBbuLtbrN8MGmemlz9d5Fq8HuMkcZX4asQ',
  authDomain: 'react-native-54f31.firebaseapp.com',
  projectId: 'react-native-54f31',
  storageBucket: 'react-native-54f31.appspot.com',
  messagingSenderId: '521194940554',
  appId: '1:521194940554:web:659eb28072458940f02573',
  measurementId: 'G-L8XBEHWPX7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {auth, db};
