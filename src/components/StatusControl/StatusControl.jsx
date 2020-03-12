import React from 'react'
import './StatusControl.css'
import Button from '../UI/Button/Button'
import avatarImg from '../UI/Button/images/default-user-image.png'
import StatusMessage from './StatusMessage/StatusMessage'
import { withFirebaseHOC } from '../../Firebase'


class StatusControl extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="status-side">
                    <header>
                        <Button iconImg={this.props.firebase.currentUser().photo} />
                        <h2>Meu status</h2>
                        <span className='status-update'>Sem atualizações</span>
                    </header>
                    <div className='border-bottom'></div>
                    <span className='status-update-date'>RECENTE</span>
                    <div className="status-side-messages">
                        <StatusMessage 
                            avatarImg={avatarImg}
                            authorMessage='Igor'
                            dateMessage='hoje'/>
                    </div>
                    
                </div>
                <div className="status">
                    <i className="fas fa-times" onClick={this.props.handleCloseStatus}></i>
                    <p>Clique no contato para ver as atualizacoes de status.</p>
                </div>
            </React.Fragment>
        )
    };
}

export default withFirebaseHOC(StatusControl)