import React from 'react'

class Input extends React.Component{
    render(){
        return(
            <input type="text" placeholder={this.props.placeholder}/>
        );   
    }
}

export default Input