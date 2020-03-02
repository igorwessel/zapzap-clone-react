import React from 'react'
import './Side.css'
import Button from '../Button/Button'
import Input from '../Input/Input'
import iconStatus from '../Button/images/icon-status.png'
import iconMessages from '../Button/images/icon-messages.png'
import iconThreePoints from '../Button/images/icon-three-points.png'
import avatarExample from '../Button/images/example-avatar.jpeg'
import MessagePreview from '../../Message/MessagePreview/MessagePreview'
import ProfileControl from '../../ProfileControl/ProfileControl'


class Side extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profileControl: false,
        }
        this.handleProfileClick = this.handleProfileClick.bind(this)
        this.handleProfileClickHide = this.handleProfileClickHide.bind(this)
    }

    handleProfileClick(e) {
        this.setState({
            profileControl: true
        })
    }

    handleProfileClickHide(e) {
        document.querySelector('.side.none').classList.remove('none')
        this.setState({
            profileControl: false
        })
    }


    render() {
        const clickedinProfile = this.state.profileControl
        let profileControl;

        if (clickedinProfile) {
            profileControl = <ProfileControl clickHideOverlay={this.handleProfileClickHide} />
            document.querySelector('.side').classList.add('none')
        }



        return (
            <React.Fragment>
                {profileControl}
                <div className="side">
                    <header className='side-header'>
                        <div className="side-avatar">
                            <Button iconImg={avatarExample}
                                iconDesc='avatar'
                                iconId='avatarImg'
                                click={this.handleProfileClick} />
                        </div>
                        <div className="side-container-buttons">
                            <Button iconImg={iconStatus}
                                iconDesc='status'
                                iconId='status' />
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
                            avatarImg={avatarExample}
                            authorMessage='Igor'
                            dateMessage={'Hoje'}
                            message={'Opa!'} />
                        <MessagePreview
                            avatarImg={avatarExample}
                            authorMessage='Igor'
                            dateMessage={'Ontem'}
                            message={'Opa!'} />
                        <MessagePreview avatarImg={avatarExample}
                            authorMessage='Igor'
                            dateMessage={'01/03/2020'}
                            message={'Opa!'} />
                        <MessagePreview avatarImg={avatarExample}
                            authorMessage='Igor'
                            dateMessage={'Hoje'}
                            message={'Bom dia!'} />
                        <MessagePreview avatarImg={avatarExample}
                            authorMessage='Igor'
                            dateMessage={'Hoje'}
                            message={'Lorem ipsum upsum ipsun ipsun ipsun ipsun ipsun ipsun ipsun!'} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Side