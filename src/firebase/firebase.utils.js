import { initializeApp } from 'firebase/app'
import { getFirestore, getDoc, doc, setDoc, collection, writeBatch } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const config = {
    apiKey: "AIzaSyCn1q4TNe_W_rOUTbRGzxD2BDapo7A0tX0",
    authDomain: "crwn-db-5eb93.firebaseapp.com",
    projectId: "crwn-db-5eb93",
    storageBucket: "crwn-db-5eb93.appspot.com",
    messagingSenderId: "99847970393",
    appId: "1:99847970393:web:6beb5b02612e55834b9b48"
}

const app = initializeApp(config)

const db = getFirestore(app)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const auth = getAuth();

export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, provider)
    } catch (error) {
        console.log(`Error occured: ${error}`)
    }
}

export const createCollectionAndDocuments = async (collection_array, collection_name) => {
    const collectionRef = collection(db, collection_name)
    const batch = writeBatch(db)
    collection_array.forEach(collection_item => {
        const { title, imageUrl } = collection_item
        const itemRef = doc(collectionRef)
        batch.set(itemRef, { title, imageUrl })
    })
    await batch.commit()
    // console.log(collectionSnap)
}


export const retrieveCollectionRef = (collection_name) => {
    const collectionRef = collection(db, collection_name)
    return collectionRef
}

export const retrieveCollectionItems = async (snapshot) => {
    const collection_array = snapshot.docs.map(item => {
        const { title, items } = item.data()
        const id = item.id
        return { id, title, items }
    }
    )
    const collection_obj = collection_array.reduce((accumulator, currentItem) => {
        const key = encodeURI(currentItem.title.toLowerCase())
        accumulator[key] = { ...currentItem, routeName: key }
        return accumulator
    }, {})
    return collection_obj
}

export const retrieveMenuItems = async (snapshot) => {
    const menu_array = snapshot.docs.map(item => {
        const { title, imageUrl } = item.data()
        const id = item.id
        return { id, title, imageUrl }
    }
    )
    const menu_length = menu_array.length
    const menu_obj = menu_array.reduce((accumulator, currentItem, index) => {
        const key = encodeURI(currentItem.title.toLowerCase())
        accumulator[key] = { ...currentItem, linkUrl: `shop/${key}` }
        if (index >= menu_length - 2) accumulator[key]['size'] = 'large'
        return accumulator
    }, {})
    return menu_obj
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = doc(db, `users/${userAuth.uid}`)
    // console.log(userRef)
    const snapShot = await getDoc(userRef)
    // console.log(snapShot)
    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user document', error)
        }
    }
    return userRef;
}
