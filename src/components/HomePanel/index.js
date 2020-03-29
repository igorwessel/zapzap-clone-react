import React from 'react'
import { 
    FiMoreVertical, 
    FiCircle, 
    FiMessageSquare, 
    FiSearch, 
    FiChevronDown
} from 'react-icons/fi'

import defaultProfileImg from 'assets/default-user-image.png'

import styles from  './styles.module.css'

const HomePanel = ({ showProfile, showChat, showContacts }) => (
    
    <div className={styles.side}>
        <header className={styles.header}>
            <img 
                src={defaultProfileImg} 
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
            <div className={styles.previewMsg}>
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
                        <FiChevronDown size={24} color="rgba(0,0,0, .3)"/>
                    </div>
                </div>
            </div>
        </div>
    </div> 
)

export default HomePanel