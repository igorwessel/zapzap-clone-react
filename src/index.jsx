import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/UI/Main/Main'
import './index.css';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='header'></div>
                <Main />
            </React.Fragment>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
