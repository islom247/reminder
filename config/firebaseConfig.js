import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgquRQeOS6l3VmNkcMafX_8n9zf85kvaY",
    authDomain: "reminder-z.firebaseapp.com",
    databaseURL: "https://reminder-z.firebaseio.com",
    projectId: "reminder-z",
    storageBucket: "reminder-z.appspot.com",
    messagingSenderId: "385126983545",
    appId: "1:385126983545:web:354071039867e5b64331a8",
    measurementId: "G-EY82FQ3GJP"
};
export default (!firebase.apps.length ?
        firebase.initializeApp(firebaseConfig) :
        firebase.app()
);
//firebase.analytics();
