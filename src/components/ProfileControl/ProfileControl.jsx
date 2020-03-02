import React from 'react';
import Anime from 'react-anime';
import './ProfileControl.css'
import avatarExample from '../UI/Button/images/example-avatar.jpeg'



class ProfileControl extends React.Component {

    render() {
        return (
            <Anime width={['0', '100%']} >
                <div className="side-profile">
                    <header>
                        <i className="fas fa-arrow-left"
                            onClick={this.props.clickHideOverlay}></i>
                        <h3>Perfil</h3>
                    </header>
                    <div className="side-profile-details">
                        <div className="side-profile-details-image">
                            <Anime scale={[.5, .9]} delay={100}>
                                <img src={avatarExample} alt="" />
                            </Anime>
                        </div>
                        <div className="side-profile-details-name">
                            <p>Nome</p>
                            <span>Igor Wessel</span>
                            <i className="fas fa-pencil-alt"></i>
                        </div>
                        <div className="side-profile-details-message">
                            <p>Recado</p>
                            <span>...</span>
                            <i className="fas fa-pencil-alt"></i>
                        </div>
                    </div>
                </div>
            </Anime>
        )
    };
}


export default ProfileControl