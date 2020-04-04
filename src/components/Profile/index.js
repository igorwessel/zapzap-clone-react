import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { MdEdit, MdCheck } from 'react-icons/md'

import styles from './styles.module.css'
import defaultProfileImg from 'assets/default-user-image.png'
import { useSession } from '../../provider/auth'

const Profile = ({ handleClick }) => {
    const { ...user } = useSession();
    const [name, setName] = useState(user.name)
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

            <div className={styles.photo}>
                <img src={user ? user.photo : defaultProfileImg} alt="User Profile"/>
            </div>

            <section className={styles.form}>
                <form>
                    <label htmlFor="display-name">Nome</label>
                    <div>
                        <input 
                            type="text" 
                            name="display-name" 
                            disabled={disabled}
                            ref={(input) =>   {
                                if(!disabled) {
                                    focus(input)
                                }
                            }}
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