import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { MdEdit, MdCheck } from 'react-icons/md'

import styles from './styles.module.css'

const Profile = ({ handleClick }) => {
    const [name, setName] = useState('Contato')
    const [disabled, setDisabled] = useState(true)

    const focus = (component) => {
        if(component){
            component.focus()
        }
    }

    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <FiArrowLeft size={24} onClick={handleClick}/>
                <span>Perfil</span>
            </header>

            <div className={styles.photocontainer}>
                <img src={''} alt="User Profile" className={styles.photo}/>
                <div className={styles.overlay}>
                    <span>Clique para editar a foto</span>
                    <input type="file" name="user-photo-upload" id="user-photo-upload"/>
                </div>
            </div>

            <section className={styles.form}>
                <form>
                    <label htmlFor="display-name">Nome</label>
                    <div className={`${disabled ? "" : styles.borderBottomGreen}`}>
                        <input 
                            type="text" 
                            name="display-name" 
                            disabled={disabled}
                            ref={(input) => { if(!disabled) focus(input) }}
                            value={name}
                            onChange={e => setName(e.target.value)}/>
                        {!disabled &&
                        <MdCheck
                            size={24} 
                            color="#919191"
                            onClick={e => setDisabled(!disabled)} />}
                        {disabled &&
                        <MdEdit 
                            size={24} 
                            color="#919191"
                            onClick={e => setDisabled(!disabled)}/>}
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Profile