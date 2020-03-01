import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Side from './components/UI/Side/Side';
import Messages from './components/UI/Main/Main';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='header'></div>
                <div className="main-container">
                    <Side />
                    <Messages />
                </div>
            </React.Fragment>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
