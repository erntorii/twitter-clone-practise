import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCLsm9euFxJnHokMsca8WTw6j7DZK8vUIA",
  authDomain: "twitter-clone-practise.firebaseapp.com",
  projectId: "twitter-clone-practise",
  storageBucket: "twitter-clone-practise.appspot.com",
  messagingSenderId: "172119293520",
  appId: "1:172119293520:web:883fe11daf4760b33d5b55"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
