import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Side from './components/UI/Side/Side';
import Messages from './components/UI/Main/Main';
import StatusControl from './components/StatusControl/StatusControl';
import { Firebase } from './Firebase/firebase'
import FirebaseContext from './components/Firebase/FirebaseContext'
import { User } from './model/User';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            statusControl: false,
        }
        this.handleStatusClick = this.handleStatusClick.bind(this)
        this.handleCloseStatus = this.handleCloseStatus.bind(this)
        this.firebase = new Firebase();
        this.initAuth()
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

    initAuth(){
        let user;
        if(!user){
            this.firebase.initAuth()
                .then((response) => {

                    user = new User(response.user.email);
                    let userRef = User.findByEmail(response.user.email);

                    userRef.set({
                        name: response.user.displayName,
                        email: response.user.email,
                        photo: response.user.photoUrl ? response.user.photoUrl : ''

                    }).then(() => {

                        document.querySelector('.main-container').style.display = 'grid';

                    });
                    
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }

    render() {
        const clickedinStatus = this.state.statusControl
            
        let statusControl;

        if (clickedinStatus) {
            statusControl = <StatusControl handleCloseStatus={this.handleCloseStatus} />
        }

        return (
                <React.Fragment>
                    <div className='header'></div>
                    <div className="main-container" style={{display: 'none'}}>
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
