const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SEND_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config)

const db = firebase.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const loginGoogle = async () => {
    try{
        const result = await auth.signInWithPopup(provider)
        const userdb = await db.collection('/users').doc(result.user.email).get()
        return userdb.data()
        
    } catch(err) {
        console.log(err)
        throw err
    }
}   

export const signOut = () => auth.signOut();

export { firebase }