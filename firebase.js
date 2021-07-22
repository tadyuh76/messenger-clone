import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD4hENiosXINJOGRUYiDnkHGmbmkf1ho14',
  authDomain: 'messenger-clone-4df4e.firebaseapp.com',
  projectId: 'messenger-clone-4df4e',
  storageBucket: 'messenger-clone-4df4e.appspot.com',
  messagingSenderId: '414017455584',
  appId: '1:414017455584:web:33794b76bc3d60dcc81785',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export { firebase, auth, db };
