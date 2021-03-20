import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCayY4wuKRdEWEM_IyJji82M8RnbIfkF2A",
    authDomain: "clone-20fb4.firebaseapp.com",
    databaseURL: "https://clone-20fb4.firebaseio.com",
    projectId: "clone-20fb4",
    storageBucket: "clone-20fb4.appspot.com",
    messagingSenderId: "1062499104562",
    appId: "1:1062499104562:web:f54027a5afb318936b492b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};