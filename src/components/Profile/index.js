import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { MdEdit } from 'react-icons/md'

import styles from './styles.module.css'
import defaultProfileImg from 'assets/default-user-image.png'

const Profile = props => {
    const [name, setName] = useState('Contato')

    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <FiArrowLeft size={24}/>
                <span>Perfil</span>
            </header>

            <div className={styles.photo}>
                <img src={defaultProfileImg} alt="User Profile"/>
            </div>

            <section className={styles.form}>
                <form>
                    <label htmlFor="display-name">Nome</label>
                    <div>
                        <input 
                            type="text" 
                            name="display-name" 
                            value={name}
                            onChange={e => setName(e.target.value)}/>
                        <MdEdit size={24} color="#919191"/>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Profile