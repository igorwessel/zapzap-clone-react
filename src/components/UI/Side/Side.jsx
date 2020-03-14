import React from 'react'
import './Side.css'
import Button from '../Button/Button'
import Input from '../Input/Input'
import iconStatus from '../Button/images/icon-status.png'
import iconMessages from '../Button/images/icon-messages.png'
import iconThreePoints from '../Button/images/icon-three-points.png'
import defaultAvatar from '../Button/images/default-user-image.png'
import MessagePreview from '../../Message/MessagePreview/MessagePreview'
import ProfileControl from '../../ProfileControl/ProfileControl'
import { withFirebaseHOC } from '../../../Firebase/index'


class Side extends React.Component { 
    render() {
        let profileControl;

        if (this.props.showProfile) {
            profileControl = <ProfileControl 
                                handleProfileClick={this.props.handleProfileClick}
                                user={this.props.userInfo}/>
        }
        return (
            <React.Fragment>
                {profileControl}
                {!this.props.showProfile && 
                <div className="side">
                    <header className='side-header'>
                        <div className="side-avatar">
                            <Button iconImg={this.props.userInfo ? this.props.userInfo.photo : defaultAvatar}
                                click={this.props.handleProfileClick} />
                        </div>
                        <div className="side-container-buttons">
                            <Button iconImg={iconStatus}
                                iconDesc='status'
                                iconId='status'
                                click={this.props.handleStatusClick} />
                            <Button iconImg={iconMessages}
                                iconDesc='new message'
                                iconId='newMessage' />
                            <Button iconImg={iconThreePoints}
                                iconDesc='more options'
                                iconId='moreOptions' />
                        </div>
                    </header>
                    <div className="side-container-input">
                        <i className="fas fa-search"></i>
                        <Input placeholder='Procurar ou comecar uma nova conversa.' />
                    </div>
                    <div className="messages-previews">
                        <MessagePreview
                            avatarImg={defaultAvatar}
                            authorMessage='Igor'
                            dateMessage={'Hoje'}
                            message={'Opa!'} />
                    </div>
                </div>}
            </React.Fragment>
        );
    }
}

export default withFirebaseHOC(Side)