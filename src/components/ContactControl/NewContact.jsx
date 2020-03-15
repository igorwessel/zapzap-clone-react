import React from 'react'
import './NewContact.css'
import { withFirebaseHOC } from '../../Firebase'


class NewContact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddContact = this.handleAddContact.bind(this)
    }

    handleAddContact(e){
        const { firebase } = this.props

        if(!this.state.value) {
            return
        }

        firebase.findByEmail(this.state.value).get().then( contact => {
            let contactData = contact.data()

            if(contactData){
                firebase.addContact(this.props.user.email, contactData).then( () => {
                    console.info('Contato foi adicionado')
                })
            } else {
                console.log(contactData)
                console.info('Usuario não encontrado.')
            }
        })
        
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

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
                            <input type="text" 
                                   placeholder='Endereço de email'
                                   value={this.state.value}
                                   onChange={this.handleChange}/>
                        </label>
                    </div>
                    <button type='button'
                            onClick={this.handleAddContact}>
                                Adicionar
                    </button>
                </form>
            </div>
        )
    }
}

export default withFirebaseHOC(NewContact)
