import React from 'react'
import './StatusMessage.css'


class StatusMessage extends React.Component {
    render(){
        return(
            <div className="status-side-message">
                <div className="status-avatar">
                    <img src={this.props.avatarImg} alt=""/>
                </div>
                <div className="status-message">
                    <h2>{this.props.authorMessage}</h2>
                    <span>{this.props.dateMessage}</span>
                </div>
            </div>
        )
    };
}

export default StatusMessage