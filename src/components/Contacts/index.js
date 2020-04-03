import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'


import defaultProfileImg from 'assets/default-user-image.png'
import styles from './styles.module.css'


const Contacts = ({ handleClick }) => (
    <div className={styles.container}>
        <header>
            <FiArrowLeft size={24} onClick={ handleClick }/>
            <h4>Contatos</h4>
        </header>

        <section className={styles.form}>
            <form>
                <label htmlFor="">E-mail</label>
                <input type="text" placeholder="Digite o email"/>
                <button type="submit" onSubmit={e => e.preventDefault}>Adicionar</button>
            </form>
        </section>

    
        <div className={styles.contacts}>
            {/* Transform this div abellow in new component for render each contact. */}
            <div className={styles.contact}>
                <img src={defaultProfileImg} alt="User Profile"/>
                <div>
                    <h2>Contato</h2>
                </div>
            </div>

        </div>
    </div>
)

export default Contacts