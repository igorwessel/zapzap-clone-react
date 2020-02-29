import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/UI/Header/Header'
import Main from './components/UI/Main/Main'
import './index.css';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Main />
            </React.Fragment>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
