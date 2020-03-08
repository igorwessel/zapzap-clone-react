import React from 'react'
import { withFirebaseHOC } from '../../../Firebase'
import { User } from '../../../model/User'


class ProfileControlForm extends React.Component {

    constructor(props){
        super(props)
        this.state={
            value: this.props.firebase.currentUser().displayName,
            disabled: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEnableEdit = this.handleEnableEdit.bind(this)
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e){
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
        let editOrSubmit = iconEditOrSubmit === 'fas fa-pencil-alt' ? this.handleEnableEdit : this.handleSubmit;

        return(
            <form>
                <label>
                    Nome
                    <input type="text" 
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