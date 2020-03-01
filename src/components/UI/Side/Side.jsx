import React from 'react'
import './Side.css'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import iconStatus from '../../Button/images/icon-status.png'
import iconMessages from '../../Button/images/icon-messages.png'
import iconThreePoints from '../../Button/images/icon-three-points.png'
import avatarExample from '../../Button/images/example-avatar.jpeg'
import MessagePreview from '../../MessagePreview/MessagePreview'



const Side = props => {
    return (
        <div className="side">
            <header className='side-header'>
                <div className="side-avatar">
                    <Button iconImg={avatarExample} iconDesc='avatar'/> 
                </div>
                <div className="side-container-buttons">
                    <Button iconImg={iconStatus} iconDesc='status'/>
                    <Button iconImg={iconMessages} iconDesc='new message'/>
                    <Button iconImg={iconThreePoints} iconDesc='more options'/>
                </div>
            </header>
            <div className="side-container-input">
                <i className="fas fa-search"></i>
                <Input placeholder='Procurar ou comecar uma nova conversa.'/>
                {/*#TODO: retirar <input type="text" placeholder='Procurar ou comecar uma nova conversa.' />  */}
            </div>
            <div className="messages-previews">
                <MessagePreview avatarImg={avatarExample} authorMessage='Igor' dateMessage={'Hoje'} message={'Opa!'} />
                <MessagePreview avatarImg={avatarExample} authorMessage='Igor' dateMessage={'Ontem'} message={'Opa!'} />
                <MessagePreview avatarImg={avatarExample} authorMessage='Igor' dateMessage={'01/03/2020'} message={'Opa!'} />
                <MessagePreview avatarImg={avatarExample} authorMessage='Igor' dateMessage={'Hoje'} message={'Bom dia!'} />
                <MessagePreview avatarImg={avatarExample} authorMessage='Igor' dateMessage={'Hoje'} message={'Lorem ipsum upsum ipsun ipsun ipsun ipsun ipsun ipsun ipsun!'} />
                <MessagePreview avatarImg={avatarExample} authorMessage='Igor' dateMessage={'Hoje'} message={'Lorem '} />
                <MessagePreview avatarImg={avatarExample} authorMessage='Igor' dateMessage={'Hoje'} message={'Opa!'} />
                <MessagePreview avatarImg={avatarExample} authorMessage='Igor' dateMessage={'Hoje'} message={'Opa!'} />
                <MessagePreview avatarImg={avatarExample} authorMessage='Igor' dateMessage={'Hoje'} message={'Opa!'} />
                <MessagePreview avatarImg={avatarExample} authorMessage='Igor' dateMessage={'Hoje'} message={'Opa!'} />
                <MessagePreview avatarImg={avatarExample} authorMessage='Igor' dateMessage={'Hoje'} message={'Opa!'} />
                <MessagePreview avatarImg={avatarExample} authorMessage='Igor' dateMessage={'Hoje'} message={'Opa!'} />
            </div>
        </div>
    )
}


export default Side