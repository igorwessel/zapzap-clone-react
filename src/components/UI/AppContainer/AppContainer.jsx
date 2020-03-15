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
            contacts: [],
            showApp: true,
            showStatus: false,
            showProfile: false,
            showNewContact: false,
            isFetching: false
        };
        this.handleStatusClick = this.handleStatusClick.bind(this)
        this.handleProfileClick = this.handleProfileClick.bind(this)
        this.handleNewContactClick = this.handleNewContactClick.bind(this)
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

    handleNewContactClick(e){
        this.setState({
            showNewContact: !this.state.showNewContact
        })
    }

    listenerUserInfoChange(){
        this.props.firebase.findByEmail(this.state.userinfo.email).onSnapshot( user => {
            this.setState({
                userinfo: user.data()
            })
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
                        } else {
                            user.name = response.user.displayName;
                            user.email = response.user.email;
                            user.photo = response.user.photoURL;
                            user.save().then( () => {
                                this.setState({
                                    userinfo: {
                                        name: user.name, 
                                        email: user.email, 
                                        photo: user.photo
                                    },
                                    showApp: true,
                                    isFetching: false
                                })
                            })
                        }
                        this.listenerUserInfoChange()
                        this.props.firebase.getContacts(this.state.userinfo.email).onSnapshot( contacts => {
                            let arraycontacts = contacts.docs.map( value => {
                                return {
                                    name: value.data().name,
                                    email: value.data().email,
                                    photo: value.data().photo
                                }
                            })

                            this.setState({
                                contacts: arraycontacts
                            })
                        })
                    })
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
        return (
                <React.Fragment>
                    <div className='header'></div>
                    {!this.state.isFetching &&
                    <div className="app-container">
                        {!this.state.showApp && <StatusControl 
                                                handleStatusClick={this.handleStatusClick} 
                                                userPhoto={this.state.userinfo.photo} />}
                        {this.state.showApp && 
                        <Side
                            showProfile={this.state.showProfile}
                            showNewContact={this.state.showNewContact}
                            userInfo={this.state.userinfo}
                            contacts={this.state.contacts}
                            handleNewContactClick={this.handleNewContactClick}
                            handleStatusClick={this.handleStatusClick}
                            handleProfileClick={this.handleProfileClick}/>}
                        {this.state.showApp && <Main/>}
                    </div>}
                </React.Fragment>
        );
    }
}


export default withFirebaseHOC(AppContainer)
