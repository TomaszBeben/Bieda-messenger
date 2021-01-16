import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA8YVyrRyCD1YPz7kwdg6PsHiof_nBQWGc",
    authDomain: "bieda-messenger.firebaseapp.com",
    databaseURL: "https://bieda-messenger-default-rtdb.firebaseio.com",
    projectId: "bieda-messenger",
    storageBucket: "bieda-messenger.appspot.com",
    messagingSenderId: "49796396916",
    appId: "1:49796396916:web:83f90ac14a2f88fd9b5e21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;