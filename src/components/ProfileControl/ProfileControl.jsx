import React from 'react';
import './ProfileControl.css'
import { motion } from 'framer-motion'
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
            <motion.div
                animate={{
                    width: ['0%', '100%']
                }}
                transition={{
                    duration: .18
                }} 
                className="side-profile">
                    <header>
                        <i className="fas fa-arrow-left"
                            onClick={this.props.handleProfileClick}></i>
                        <h3>Perfil</h3>
                    </header>
                    <div className="side-profile-details">
                        <div className="side-profile-details-image">
                            <motion.img
                                 src={this.props.user.photo}
                                 animate={{ 
                                     scale: [.2, .8, 1],
                                     opacity: [0, .6, 1]
                                    }}
                                 transition={{ duration: 1, times: [.20, .25, .30] }}
                                 alt=''
                                 onClick={(e) => this.handleClickEditPhoto(e)}/>
                            <input type="file"
                                   ref={input => this.inputFile = input}
                                   onChange={(e) => this.handleUploadPhoto(e)}/>
                        </div>
                        <motion.div
                            animate={{
                                opacity: [0, .6, 1]
                            }}
                            transition={{ duration: .5, times: [ .30, .35, .40], delay: .28}} 
                            className="side-profile-details-name">
                            <ProfileControlForm 
                                username={this.props.user.name}
                                useremail={this.props.user.email}/>
                        </motion.div>
                    </div>
            </motion.div>
        )
    };
}


export default withFirebaseHOC(ProfileControl)