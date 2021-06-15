import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: '-fMqFrAIzaSyBDLWX4VKQQ3E83EFkjpvmupoA20',
  authDomain: 'rn-auth-3c051.firebaseapp.com',
  databaseURL: 'https://rn-auth-3c051-default-rtdb.firebaseio.com/',
  projectId: 'rn-auth-3c051',
  storageBucket: 'rn-auth-3c051.appspot.com',
  messagingSenderId: '419125392151'
}

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  };

export default firebase;