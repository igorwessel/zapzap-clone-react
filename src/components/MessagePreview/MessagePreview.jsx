import React from 'react'
import './MessagePreview.css'

const MessagePreview = props => {
    return(
        <div className="message-preview-contact">
            <div className="avatar">
                <img src={props.avatarImg} alt=""/>
            </div>
            <div className="message-preview">
                <h2>{props.authorMessage}</h2>
                <span>{props.dateMessage}</span>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default MessagePreview