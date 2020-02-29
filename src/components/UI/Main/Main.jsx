import React from 'react'
import Contacts from '../Contacts/Contacts'
import Messages from '../Messages/Messages'


const Main = (props) => {
    return (
        <div className="main-container">
            <Contacts />
            <Messages />
        </div>
    )
}

export default Main