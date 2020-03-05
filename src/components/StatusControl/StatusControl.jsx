import React from 'react'
import './StatusControl.css'
import Button from '../UI/Button/Button'
import avatarImg from '../UI/Button/images/example-avatar.jpeg'
import StatusMessage from './StatusMessage/StatusMessage'


class StatusControl extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="status-side">
                    <header>
                        <Button iconImg={avatarImg} />
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
                        <StatusMessage 
                            avatarImg={avatarImg}
                            authorMessage='Igor'
                            dateMessage='hoje'/>
                        <StatusMessage 
                            avatarImg={avatarImg}
                            authorMessage='Igor'
                            dateMessage='hoje'/>
                        <StatusMessage 
                            avatarImg={avatarImg}
                            authorMessage='Igor'
                            dateMessage='hoje'/>
                        <StatusMessage 
                            avatarImg={avatarImg}
                            authorMessage='Igor'
                            dateMessage='hoje'/>
                        <StatusMessage 
                            avatarImg={avatarImg}
                            authorMessage='Igor'
                            dateMessage='hoje'/>
                        <StatusMessage 
                            avatarImg={avatarImg}
                            authorMessage='Igor'
                            dateMessage='hoje'/>
                        
                        <StatusMessage 
                            avatarImg={avatarImg}
                            authorMessage='Igor'
                            dateMessage='hoje'/>
                        
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

export default StatusControl