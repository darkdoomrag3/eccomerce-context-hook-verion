import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDxGjmLG7rQYtXF4PHQyBh-TDAYnACNfDI",
    authDomain: "crown-db-c68e7.firebaseapp.com",
    databaseURL: "https://crown-db-c68e7.firebaseio.com",
    projectId: "crown-db-c68e7",
    storageBucket: "crown-db-c68e7.appspot.com",
    messagingSenderId: "879396826504",
    appId: "1:879396826504:web:62c035d9d9a2ea6a5f5e3d",
    measurementId: "G-B4WZDG6DEQ"
}


export const createUserProfileDocument = async  (userauth , additionalData) =>{
if(!userauth) return;

const userRef = firestore.doc('user/135dsadfadd');

const snapShot = await userRef.get();
console.log(snapShot);



}




firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

