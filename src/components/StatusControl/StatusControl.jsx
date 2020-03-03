import React from 'react'
import './StatusControl.css'
import Button from '../UI/Button/Button'
import avatarImg from '../UI/Button/images/example-avatar.jpeg'


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
                </div>
                <div className="status">
                    <Button label='X' click={this.props.handleCloseStatus} />
                </div>
            </React.Fragment>
        )
    };
}

export default StatusControl