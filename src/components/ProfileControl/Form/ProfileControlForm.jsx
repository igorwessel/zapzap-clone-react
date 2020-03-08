import React from 'react'
import { withFirebaseHOC } from '../../../Firebase'
import { User } from '../../../model/User'


class ProfileControlForm extends React.Component {

    constructor(props){
        super(props)
        this.user = new User(this.props.firebase.currentUser().email)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEnableEdit = this.handleEnableEdit.bind(this)
        this.state={
            value: this.user.name,
            disabled: true
        }
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e){
        console.log(this.user.name)
        console.log(this.user)
        this.setState({
            disabled: true
        })
    }

    handleEnableEdit(e){        
        this.setState({
            disabled: false
        })
    }

    render(){
        let iconEditOrSubmit = this.state.disabled ? "fas fa-pencil-alt" : "fas fa-check";
        let borderGreen;

        if (iconEditOrSubmit === 'fas fa-check') {
            borderGreen = 'border-green-input'
        }
        let editOrSubmit = iconEditOrSubmit === 'fas fa-pencil-alt' ? this.handleEnableEdit : this.handleSubmit;

        return(
            <form>
                <label>
                    Nome
                    <input type="text"
                           className={borderGreen} 
                           value={this.state.value} 
                           onChange={this.handleChange} 
                           disabled={this.state.disabled}/>
                </label>
                <i className={iconEditOrSubmit} 
                   onClick={editOrSubmit}></i>
            </form>
        )
    };
}


export default withFirebaseHOC(ProfileControlForm)