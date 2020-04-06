import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import AppContainer from 'components/AppContainer'
import './global.css' 
import { Store } from './store'


const App = () => {
    return (
        <div className="bg-header" tabIndex="-1">
            <Provider store={Store}>
                <AppContainer />
            </Provider>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
