import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { MdEdit } from 'react-icons/md'

import styles from './styles.module.css'
import defaultProfileImg from 'assets/default-user-image.png'

const Profile = props => (
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
                    <input type="text" name="display-name" value="Contato"/>
                    <MdEdit size={24} color="#919191"/>
                </div>
            </form>
        </section>
    </div>
)

export default Profile