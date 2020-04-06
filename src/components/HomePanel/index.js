import React from 'react'
import MessagePreview from '../MessagePreview'

import { 
    FiMoreVertical, 
    FiCircle, 
    FiMessageSquare, 
    FiSearch
} from 'react-icons/fi'

import styles from  './styles.module.css'
import { useSession } from '../../provider/auth'

const HomePanel = ({ showProfile, showChat, showContacts, contacts, loadingContacts }) => {
    const { ...user } = useSession()

    return (
        <div className={styles.side}>
            <header className={styles.header}>
                <img 
                    src={user.photo} 
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

            <div className={styles.contacts}>
                {!loadingContacts && 
                contacts.map(contact => (
                    <MessagePreview 
                        key={contact.email}
                        name={contact.name}
                        photo={contact.photo}
                        showChat={showChat}/>
                ))}
            </div>
        </div> 

    )
}
export default HomePanel