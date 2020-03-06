import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Side from './components/UI/Side/Side';
import Messages from './components/UI/Main/Main';
import StatusControl from './components/StatusControl/StatusControl';
import { Firebase } from './Firebase/firebase'
import FirebaseContext from './components/Firebase/FirebaseContext'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            statusControl: false
        }
        this.handleStatusClick = this.handleStatusClick.bind(this)
        this.handleCloseStatus = this.handleCloseStatus.bind(this)
    }

    handleStatusClick(e) {
        this.setState({
            statusControl: true,
            show: false
        })
    }

    handleCloseStatus(e) {
        this.setState({
            stateControl: false,
            show: true
        })
    }

    render() {
        const clickedinStatus = this.state.statusControl
        const firebase = new Firebase();

        firebase.initAuth()
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.error(err)
            })

            
        let statusControl;

        if (clickedinStatus) {
            statusControl = <StatusControl handleCloseStatus={this.handleCloseStatus} />
        }
        return (
                <React.Fragment>
                    <div className='header'></div>
                    <div className="main-container">
                            {!this.state.show && statusControl}
                            {this.state.show && <Side handleStatusClick={this.handleStatusClick} />}
                            {this.state.show && <Messages />}
                    </div>
                </React.Fragment>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
