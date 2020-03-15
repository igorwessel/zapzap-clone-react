import React from 'react'
import './NewContact.css'

class NewContact extends React.Component{
    render(){
        return(
            <div className="side-new-contact">
                <header>
                    <i className="fas fa-arrow-left"
                        onClick={this.props.handleNewContactClick}></i>
                    <h3>Nova Conversa</h3>
                </header>
                <form>
                    <div className="input-new-contact">
                        <label>
                            <input type="text" placeholder='Endereço de email'/>
                        </label>
                    </div>
                    <button type='button'>Adicionar</button>
                </form>
            </div>
        )
    }
}

export default NewContact
