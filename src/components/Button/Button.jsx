import React from 'react'


const Button = props => {
    return(
        <React.Fragment>
            <button onClick={props.click}>
                {props.label}
                <img src={props.iconImg} alt={props.iconDesc} id={props.iconId}/>
            </button>
        </React.Fragment>
    );
}


export default Button