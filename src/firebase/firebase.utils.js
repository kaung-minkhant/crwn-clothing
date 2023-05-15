import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyCn1q4TNe_W_rOUTbRGzxD2BDapo7A0tX0",
    authDomain: "crwn-db-5eb93.firebaseapp.com",
    projectId: "crwn-db-5eb93",
    storageBucket: "crwn-db-5eb93.appspot.com",
    messagingSenderId: "99847970393",
    appId: "1:99847970393:web:6beb5b02612e55834b9b48"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = async () => {
    try {
        await auth.signInWithPopup(provider);
    } catch (error) {
        console.log(`error occured: ${error}`)
    }
}

export default firebase;