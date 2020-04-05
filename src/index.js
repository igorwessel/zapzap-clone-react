import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import AppContainer from 'components/AppContainer'
import userContext from './provider/userContext'

import { db } from './services/firebase'
import { loginGoogle } from './provider/auth'

import './global.css' 


const App = (props) => {

    const [isLoading, setisLoading] = useState(true)
    const [user, setUser] = useState({})


    useEffect(() => {

        loginGoogle().then( response => {
            db.collection('/users').doc(response.user.email).onSnapshot(user => {
                setUser(user.data())

            })
            setisLoading(false)
        })
    }, [])

    

    return (
        <div className="bg-header" tabIndex="-1">
            <userContext.Provider value={{ user: user}}>
                {!isLoading && <AppContainer />}
            </userContext.Provider>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
