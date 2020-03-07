const firebase = require('firebase')
require('firebase/firestore')


export class Firebase {
    constructor(){

        this._config = {
            apiKey: "AIzaSyBSyPo5sTDLYayfNnm_uUmzHMObBrW6PaQ",
            authDomain: "whatsapp-clone-react-fc668.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-react-fc668.firebaseio.com",
            projectId: "whatsapp-clone-react-fc668",
            storageBucket: "whatsapp-clone-react-fc668.appspot.com",
            messagingSenderId: "872887573435",
            appId: "1:872887573435:web:10584bdb985cd126d5029e",
            measurementId: "G-0EB1GNEHMF"
          };
        this.init();

    }

    init(){
        if(!window._initializedFirebase) {
            firebase.initializeApp(this._config);
            firebase.analytics();
            window._initializedFirebase = true;
        }
    }
    
    static db(){
        return firebase.firestore();
    }

    static hd(){
        return firebase.storage();
    }

    initAuth(){
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
    }
}