import React from 'react'
import { 
    FiMoreVertical, 
    FiCircle, 
    FiMessageSquare, 
    FiSearch, 
    FiChevronDown} from 'react-icons/fi'

import defaultProfileImg from 'assets/default-user-image.png'
import styles from './styles.module.css'

const AppContainer = props => (
    <div className={styles.container}>
        <div className={styles.side}>
            <header className={styles.sideHeader}>
                <img src={defaultProfileImg} alt="User Default"/>
                <div>
                    <FiCircle size={24} color='rgba(0,0,0, .5)'/>
                    <FiMessageSquare size={24} color='rgba(0,0,0, .5)'/>
                    <FiMoreVertical size={24} color='rgba(0,0,0, .5)'/>
                </div>
            </header>

            <div className={styles.inputContainer}>
                <label htmlFor="search-contact">
                    <FiSearch size={16} color='rgba(0,0,0, .3)'/>
                </label>
                <input 
                    type="text" 
                    name="search-contact"
                    placeholder="Procurar ou começar uma nova conversa"/>
            </div>

            {/* Aqui iremos adicionar dinamicamente para cada conversa, contato. */}
            <div className={styles.contactsContainer}>
                <div className={styles.previewMsg}>
                    <img src={defaultProfileImg} alt="User Profile"/>
                    <div className={styles.previewMsgDetails}>
                        <div>
                            <h2>Contato</h2>
                            <span>11:44</span>
                        </div>
                        <div>
                            <p>dasoko</p>
                            <FiChevronDown size={24} color="rgba(0,0,0, .3)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1>opa</h1>
        </div>
    </div>
)

export default AppContainer