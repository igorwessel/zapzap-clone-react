import React from 'react'
import './AppContainer.css';
import Side from '../Side/Side';
import Messages from '../Main/Main';
import StatusControl from '../../../components/StatusControl/StatusControl';
import { withFirebaseHOC } from '../../../Firebase/index'
import { User } from '../../../model/User'


class AppContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            statusControl: false,
        }
        this.authenticate = false
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

    initAuth(){
        let user;
        if(!user){
            this.props.firebase.initAuth()
                .then((response) => {

                    user = new User(response.user.email);
                    let userRef = User.findByEmail(response.user.email);

                    userRef.set({
                        name: response.user.displayName,
                        email: response.user.email,
                        photo: response.user.photoURL

                    }).then(() => {
                        document.querySelector('.side-avatar img').setAttribute(
                            'src', response.user.photoURL
                        )
                        document.querySelector('.app-container').style.display = 'grid';

                    });
                    
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }

    componentDidMount(){
        this.initAuth()
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
                    <div className="app-container" style={{display: 'none'}}>
                        {!this.state.show && statusControl}
                        {this.state.show && <Side handleStatusClick={this.handleStatusClick} />}
                        {this.state.show && <Messages />}
                    </div>
                </React.Fragment>
        );
    }
}


export default withFirebaseHOC(AppContainer)
