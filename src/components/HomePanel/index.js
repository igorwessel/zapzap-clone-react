import React, { useState } from 'react'

import { 
    FiMoreVertical, 
    FiCircle, 
    FiMessageSquare, 
    FiSearch, 
    FiChevronDown
} from 'react-icons/fi'

import defaultProfileImg from 'assets/default-user-image.png'

import styles from  './styles.module.css'
import { useSession } from '../../provider/auth'

const HomePanel = ({ showProfile, showChat, showContacts }) => {
    const [isHover, setHover] = useState(false)
    const { ...user } = useSession()


    function mouseOverContact(e) {
        setHover(!isHover)
    }

    return (
        <div className={styles.side}>
            <header className={styles.header}>
                <img 
                    src={user ? user.photo : defaultProfileImg} 
                    alt="User Default" 
                    onClick={showProfile}/>
                <div>
                    <FiCircle size={24} color='rgba(0,0,0, .5)'/>
                    <FiMessageSquare size={24} color='rgba(0,0,0, .5)' onClick={showContacts}/>
                    <FiMoreVertical size={24} color='rgba(0,0,0, .5)'/>
                </div>
            </header>

            <div className={styles.input}>
                <label htmlFor="search-contact">
                    <FiSearch size={16} color='rgba(0,0,0, .3)'/>
                </label>
                <input 
                    type="text" 
                    name="search-contact"
                    placeholder="Procurar ou começar uma nova conversa"/>
            </div>

            {/* Here insert component for messages of user with another users. */}
            <div className={styles.contacts}>
                <div 
                    className={styles.previewMsg}
                    onMouseEnter={mouseOverContact}
                    onMouseLeave={mouseOverContact}>
                    <img 
                        src={defaultProfileImg} 
                        alt="User Profile"
                        onClick={showChat}/>
                    <div className={styles.previewMsgDetails}>
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
            </div>
        </div> 

    )
}
export default HomePanel