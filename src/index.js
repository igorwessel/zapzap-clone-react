import React from 'react'
import ReactDOM from 'react-dom'

import AppContainer from 'components/AppContainer'
import userContext from './provider/userContext'

import { useAuthState } from 'react-firebase-hooks/auth'
import { loginGoogle } from './provider/auth'
import { firebase } from './services/firebase'

import './global.css'


const App = (props) => {

    const { initialising, user } = useAuthState(firebase.auth())

    return (
        <div className="bg-header" tabIndex="-1">
            <userContext.Provider value={{ user: user, initialising}}>
                <AppContainer />
            </userContext.Provider>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
