import React from 'react'
import { withFirebaseHOC } from '../../../Firebase'


class ProfileControlForm extends React.Component {

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEnableEdit = this.handleEnableEdit.bind(this)
        this.firebaseUser = this.props.firebase.currentUser()
        this.state={
            value: this.props.username,
            disabled: true
        }
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e){  
        this.props.firebase.findByEmail(this.props.useremail).update({
            name: this.state.value
        })
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
                           value={this.state.value}
                           onChange={this.handleChange}
                           className={borderGreen}
                           disabled={this.state.disabled}/>
                </label>
                <i className={iconEditOrSubmit} 
                   onClick={editOrSubmit}></i>
            </form>
        )
    };
}


export default withFirebaseHOC(ProfileControlForm)