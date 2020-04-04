import React, { useState } from 'react'

import Home from 'components/Home'
import HomePanel from 'components/HomePanel'
import Profile from 'components/Profile'
import Chat from 'components/Chat'
import Contacts from 'components/Contacts'

import styles from './styles.module.css'

const AppContainer = (props) => {
    const [showProfile, setShowProfile] = useState(false)
    const [showChat, setShowChat] = useState(false)
    const [showContacts, setShowContacts] = useState(false)
    function handleClickShowProfile(e) {
        setShowProfile(!showProfile)
    }

    function handleClickShowChat(e) {
        setShowChat(!showChat)
    }

    function handleClickShowContacts(e) {
        setShowContacts(!showContacts)
    }


    return (
            <div className={styles.container}>
                
                {showProfile &&
                <Profile handleClick={handleClickShowProfile}/>}
                {showContacts && 
                <Contacts handleClick={handleClickShowContacts}/>}
                {!showProfile &&
                !showContacts &&
                <HomePanel 
                    showProfile={handleClickShowProfile} 
                    showChat={handleClickShowChat} 
                    showContacts={handleClickShowContacts}/>}

                {/* Home Screen and Chat*/}
                {!showChat && <Home />}
                {showChat && <Chat />}

            </div>
    )
}

export default AppContainer