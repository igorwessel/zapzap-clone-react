import React from 'react'
import './Side.css'
import Button from '../../Button/Button'
import iconStatus from '../../Button/images/icon-status.png'
import iconMessages from '../../Button/images/icon-messages.png'
import iconThreePoints from '../../Button/images/icon-three-points.png'
import avatarExample from '../../Button/images/example-avatar.jpeg'



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
                <i class="fas fa-search"></i>
                <input type="text" placeholder='Procurar ou comecar uma nova conversa.' />
            </div>
        </div>
    )
}


export default Side