import React from 'react'
import './MessagePreview.css'

class MessagePreview extends React.Component {
    render(){
        return(
            <div className="message-preview-contact" onClick={this.props.handleContactClick}>
                <div className="avatar">
                    <img src={this.props.avatarImg} alt=""/>
                </div>
                <div className="message-preview">
                    <h2>{this.props.authorMessage}</h2>
                    <span>{this.props.dateMessage}</span>
                    <p>{this.props.message}</p>
                </div>
            </div>
        );
    }
}

export default MessagePreview