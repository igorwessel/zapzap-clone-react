import React from 'react'
import './AppContainer.css';
import Side from '../Side/Side';
import Main from '../Main/Main';
import StatusControl from '../../../components/StatusControl/StatusControl';
import { withFirebaseHOC } from '../../../Firebase/index'
import { User } from '../../../model/User'


class AppContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userinfo: null,
            showApp: true,
            showStatus: false,
            showProfile: false,
            isFetching: false
        };
        this.handleStatusClick = this.handleStatusClick.bind(this)
        this.handleProfileClick = this.handleProfileClick.bind(this)
    }

    handleStatusClick(e) {
        this.setState({
            showStatus: !this.state.showStatus,
            showApp: !this.state.showApp
        })
    }

    handleProfileClick(e) {
        this.setState({
            showProfile: !this.state.showProfile
        })
    }

    initAuth(){
        let user;
        if(!user){

            this.setState({
                showApp: false,
                isFetching: true
            })

            this.props.firebase.initAuth()
                .then((response) => {

                    user = new User();

                    user.getById(response.user.email).then( (userDb) => {
                        if(userDb.exists) {
                            this.setState({
                                userinfo: userDb.data(),
                                showApp: true,
                                isFetching: false
                            })
                            return
                        } else {
                            user.name = response.user.displayName;
                            user.email = response.user.email;
                            user.photo = response.user.photoURL;
                            user.save().then( () => {
                                this.setState({
                                    userinfo: {
                                        name: user.name,
                                        email: user.email,
                                        photo: user
                                    },
                                    showApp: true,
                                    isFetching: false
                                })
                            })
                        }
                    });
                })
                .catch(err => {
                    // this.initAuth()
                })
        }

        
    }

    componentDidMount(){
        this.initAuth()
    }

    render() {
        let showStatus;
        if (this.state.showStatus) {
            showStatus = <StatusControl 
                            handleStatusClick={this.handleStatusClick} 
                            userPhoto={this.state.userinfo.photo}/>
        }
        return (
                <React.Fragment>
                    <div className='header'></div>
                    {!this.state.isFetching &&
                    <div className="app-container">
                        {!this.state.showApp && showStatus}
                        {this.state.showApp && 
                        <Side
                            showProfile={this.state.showProfile}
                            userInfo={this.state.userinfo}
                            handleStatusClick={this.handleStatusClick}
                            handleProfileClick={this.handleProfileClick}/>}
                        {this.state.showApp && <Main/>}
                    </div>}
                </React.Fragment>
        );
    }
}


export default withFirebaseHOC(AppContainer)
