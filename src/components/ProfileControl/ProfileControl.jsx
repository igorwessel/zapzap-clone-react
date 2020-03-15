import React from 'react';
import './ProfileControl.css'
import { withFirebaseHOC } from '../../Firebase';
import ProfileControlForm from './Form/ProfileControlForm';



class ProfileControl extends React.Component {
    
    render() {
        return (
            <div className="side-profile">
                    <header>
                        <i className="fas fa-arrow-left"
                            onClick={this.props.handleProfileClick}></i>
                        <h3>Perfil</h3>
                    </header>
                    <div className="side-profile-details">
                        <div className="side-profile-details-image">
                            <img src={this.props.user.photo} alt=''/>
                        </div>
                        <div className="side-profile-details-name">
                            <ProfileControlForm 
                                username={this.props.user.name}
                                useremail={this.props.user.email}/>
                        </div>
                    </div>
            </div>
        )
    };
}


export default withFirebaseHOC(ProfileControl)