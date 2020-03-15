import React from 'react'
import example from '../UI/Button/images/default-user-image.png'
import './Main.css'

class Main extends React.Component {
    render(){
        return(
            <div className="main">
                <header>
                    <div className="main-contact-details">
                        <img src={example} alt=""/>
                        <h3>Contato</h3>
                        <span>visto a ultima vez ...</span>
                    </div>
                    <div className="main-contact-actions">
                        <i className="fas fa-search"></i>
                        <i className="fas fa-paperclip"></i>
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                </header>
                <div className="message">
                </div>
                <div className="input-message">
                    <input type="text"/>
                </div>
            </div>
        )
    }
}

export default Main