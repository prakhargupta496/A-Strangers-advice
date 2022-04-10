import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD4DiGOozFVKpgV0l-DnRJ79yahe1BIgoU",
    authDomain: "kounsellar.firebaseapp.com",
    projectId: "kounsellar",
    storageBucket: "kounsellar.appspot.com",
    messagingSenderId: "193885166904",
    appId: "1:193885166904:web:62c417ba7649e3406635cd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;