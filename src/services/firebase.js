const firebase = require('firebase/app')
require('firebase/auth')

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

export default firebase