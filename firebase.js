import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDMtn35fXqwWmSs7FU32atlgJtjJt4xl9M",
    authDomain: "uber-eats-clone-335615.firebaseapp.com",
    projectId: "uber-eats-clone-335615",
    storageBucket: "uber-eats-clone-335615.appspot.com",
    messagingSenderId: "106398229746",
    appId: "1:106398229746:web:b32046dd9f79ee43951c6b"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;