import React from 'react'

import styles from './styles.module.css'
import defaultProfileImg from 'assets/default-user-image.png'
import { FiMoreVertical, FiSearch, FiPaperclip } from 'react-icons/fi'
import { FaMicrophone, FaRegSmileBeam } from 'react-icons/fa'

const Chat = props => (
    <div className={styles.container}>
        <header className={styles.header}>
            <div className={styles.friend}>
                <img src={defaultProfileImg} alt="User Img"/>
                <div>
                    <h3>Amigo</h3>
                    <span>visto por ...</span>
                </div>
            </div>
            <div className={styles.headerIcons}>
                <FiSearch size={22} color="rgba(0, 0, 0, .5)"/>
                <FiPaperclip size={22} color="rgba(0, 0, 0, .5)"/>
                <FiMoreVertical size={22} color="rgba(0, 0, 0, .5)"/>
            </div>
        </header>

        <div className={styles.chat}>
            {/* Create message component and insert here. */}
        </div>

        <div className={styles.header}>
            <FaRegSmileBeam size={24} color="rgba(0, 0, 0, .5)"/>
            <input type="text"/>
            <FaMicrophone size={24} color="rgba(0, 0, 0, .5)"/>
        </div>
    </div>
)

export default Chat