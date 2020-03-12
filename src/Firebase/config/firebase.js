import { User } from '../../model/User';

const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')

const config = {
    apiKey: "AIzaSyBSyPo5sTDLYayfNnm_uUmzHMObBrW6PaQ",
    authDomain: "whatsapp-clone-react-fc668.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-react-fc668.firebaseio.com",
    projectId: "whatsapp-clone-react-fc668",
    storageBucket: "whatsapp-clone-react-fc668.appspot.com",
    messagingSenderId: "872887573435",
    appId: "1:872887573435:web:10584bdb985cd126d5029e",
    measurementId: "G-0EB1GNEHMF"
};

firebase.initializeApp(config)

const Firebase = {

    // auth
    initAuth: () => {
        return new Promise( (s, f) => {

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then(result => {
                let token = result.credential.accessToken;
                let user = result.user

                s({
                    user, 
                    token
                })
            })
            .catch(err => {
                f(err)
            })
        })
    },

    // user
    currentUser: () => {
        return firebase.auth().currentUser
    },

    user: () => {
        let userAuthenticated = Firebase.currentUser()
        let user = new User(userAuthenticated.email)
        return user
    },
    
    // firestorage
    db: () => {
        return firebase.firestore()
    },

    getRef: () => {
        return Firebase.db().collection('/users')
    },

    findByEmail: (email) => {
        return Firebase.getRef().doc(email)
    },
    
    // hd
    hd: () => {
        return firebase.storage()
    }
}

export default Firebase