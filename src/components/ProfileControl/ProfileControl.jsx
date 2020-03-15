import React from 'react';
import './ProfileControl.css'
import { withFirebaseHOC } from '../../Firebase';
import ProfileControlForm from './Form/ProfileControlForm';



class ProfileControl extends React.Component {
    
    handleClickEditPhoto(e){
        this.inputFile.click()
    }

    handleUploadPhoto(e){
        const { firebase } = this.props
        let files = e.target.files
        if (files.length > 0){
            firebase.savePhoto(files[0], this.props.user.email).then( snapshot => {
                snapshot.ref.getDownloadURL().then( (result) => {
                    firebase.findByEmail(this.props.user.email).update({
                        photo: result
                    }) 
                })
            })
        }
    }
    
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
                            <img src={this.props.user.photo} 
                                 alt=''
                                 onClick={(e) => this.handleClickEditPhoto(e)}/>
                            <input type="file"
                                   ref={input => this.inputFile = input}
                                   onChange={(e) => this.handleUploadPhoto(e)}/>
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