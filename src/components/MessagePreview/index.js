import React, { useState } from 'react'

import styles from './styles.module.css'
import { FiChevronDown } from 'react-icons/fi'

import defaultProfileImg from 'assets/default-user-image.png'


const MessagePreview = ({ showChat }) => {
    const [isHover, setHover] = useState(false)


    function mouseOverContact(e) {
        setHover(!isHover)
    }

    return (
        <div 
            className={styles.container}
            onMouseEnter={mouseOverContact}
            onMouseLeave={mouseOverContact}>
            <img 
                src={defaultProfileImg} 
                alt="User Profile"
                onClick={showChat}/>
            <div className={styles.details}>
                <div>
                    <h2>Contato</h2>
                    <span>11:44</span>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum odio sed nunc posuere consequat.</p>
                    {isHover && <FiChevronDown size={24} color="rgba(0,0,0, .3)"/>}
                </div>
            </div>
        </div>
    )
}

export default MessagePreview