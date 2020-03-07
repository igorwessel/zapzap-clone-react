import React from 'react'

export const FirebaseContext = React.createContext(null)

export const FirebaseProvider = FirebaseContext.Provider

export const FirebaseConsumer = FirebaseContext.Consumer

export const withFirebaseHOC = Component => props => (
    <FirebaseConsumer>
        {state => <Component {...props} firebase={state} />}
    </FirebaseConsumer>
)
