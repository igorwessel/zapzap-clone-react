import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import AppContainer from './components/UI/AppContainer/AppContainer'
import Firebase, { FirebaseProvider, withFirebaseHOC } from './Firebase';


class App extends React.Component {
    render(){
        return(
            <FirebaseProvider value={Firebase}>
                <AppContainer />
            </FirebaseProvider>
        )
    };
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
