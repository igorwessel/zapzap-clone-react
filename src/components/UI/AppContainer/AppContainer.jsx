import React from 'react'
import './AppContainer.css';
import Side from '../Side/Side';
import Main from '../Main/Main';
import StatusControl from '../../../components/StatusControl/StatusControl';
import { withFirebaseHOC } from '../../../Firebase/index'
import { User } from '../../../model/User'


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showApp: true,
            statusControl: false,
        };
        this.handleStatusClick = this.handleStatusClick.bind(this);
        this.handleCloseStatus = this.handleCloseStatus.bind(this);
    }

    handleStatusClick(e) {
        this.setState({
            statusControl: true,
            showApp: false
        })
    }

    handleCloseStatus(e) {
        this.setState({
            stateControl: false,
            showApp: true
        })
    }

    initAuth(){
        let user;
        if(!user){

            this.setState({
                showApp: false
            })

            this.props.firebase.initAuth()
                .then((response) => {

                    user = new User();

                    user.getById(response.user.email).then( (userDb) => {
                        if(userDb.exists) {
                            this.setState({
                                showApp: true
                            })
                            return
                        } else {
                            user.name = response.user.displayName;
                            user.email = response.user.email;
                            user.photo = response.user.photoURL;
                            user.save().then( () => {
                                this.setState({
                                    showApp: true
                                })
                            })
                        }
                    });
                })
                .catch(err => {
                    this.initAuth()
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
            statusControl = <StatusControl handleCloseStatus={this.handleCloseStatus}/>
        }

        return (
                <React.Fragment>
                    <div className='header'></div>
                    <div className="app-container">
                        {!this.state.showApp && statusControl}
                        {this.state.showApp && <Side handleStatusClick={this.handleStatusClick}/>}
                        {this.state.showApp && <Main />}
                    </div>
                </React.Fragment>
        );
    }
}


export default withFirebaseHOC(AppContainer)
