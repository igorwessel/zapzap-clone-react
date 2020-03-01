import React from 'react'
import Side from '../Side/Side'
import Messages from '../Messages/Messages'


const Main = (props) => {
    return (
        <div className="main-container">
            <Side />
            <Messages />
        </div>
    )
}

export default Main