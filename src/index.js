import React from 'react'
import ReactDOM from 'react-dom'

import './global.css'
import AppContainer from 'components/AppContainer'

const App = (props) => {
    return(
        <div className="bg-header" tabIndex="-1">
            <AppContainer />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
