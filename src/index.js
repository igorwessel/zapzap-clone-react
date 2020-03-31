import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import firebase from './services/firebase'

import './global.css'
import AppContainer from 'components/AppContainer'


const App = (props) => {
    const [isSigned, setisSigned] = useState(false)

    const login = async () => {
        await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        setisSigned(true)
    }

    useEffect(() => {
        login();
    }, [])
    return (
        <div className="bg-header" tabIndex="-1">
            {isSigned && <AppContainer />}
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
