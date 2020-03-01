import React from 'react'


const Button = props => {
    return(
        <React.Fragment>
            <button><img src={props.iconImg} alt={props.iconDesc}/></button>
        </React.Fragment>
    );
}


export default Button