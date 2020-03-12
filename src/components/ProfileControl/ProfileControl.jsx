import React from 'react';
import Anime from 'react-anime';
import './ProfileControl.css'
import { withFirebaseHOC } from '../../Firebase';
import ProfileControlForm from './Form/ProfileControlForm';



class ProfileControl extends React.Component {
    constructor(props){
        super(props)
        this.state = { photo: null }
        this.firebaseUser = this.props.firebase.currentUser()
    }

    componentDidMount() {
        const { firebase } = this.props
        firebase.findByEmail(this.firebaseUser.email).onSnapshot( user => {
            this.setState({
                photo: user.data().photo
            })
        })
    }

    render() {
        return (
            <Anime width={['0', '100%']} height={'0%'}>
                <div className="side-profile">
                    <header>
                        <i className="fas fa-arrow-left"
                            onClick={this.props.clickHideOverlay}></i>
                        <h3>Perfil</h3>
                    </header>
                    <div className="side-profile-details">
                        <div className="side-profile-details-image">
                            <Anime scale={[.5, .9]} delay={100}>
                                <img src={this.state.photo} alt="" />
                            </Anime>
                        </div>
                        <div className="side-profile-details-name">
                            <ProfileControlForm />
                        </div>
                    </div>
                </div>
            </Anime>
        )
    };
}


export default withFirebaseHOC(ProfileControl)