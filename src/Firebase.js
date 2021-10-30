import Firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCUCwjxhnH-D99j1dKmI-tyL3Q057FI1WA',
  authDomain: 'cp-react-robinhood.firebaseapp.com',
  projectId: 'cp-react-robinhood',
  storageBucket: 'cp-react-robinhood.appspot.com',
  messagingSenderId: '112144437320',
  appId: '1:112144437320:web:bf5dd8d3a3f0d83bc6c87d',
  measurementId: 'G-NLE375QG7B',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
export { db };
