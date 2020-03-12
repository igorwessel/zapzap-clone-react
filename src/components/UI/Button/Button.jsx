import React from 'react'


class Button extends React.Component {
    render(){
        return(
            <React.Fragment>
                <button onClick={this.props.click}>
                    {this.props.label}
                    <img src={this.props.iconImg} 
                         alt={this.props.iconDesc} 
                         id={this.props.iconId}/>
                </button>
            </React.Fragment>
        );
    }
}


export default Button