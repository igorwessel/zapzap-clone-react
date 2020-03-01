import React from 'react'
import './Side.css'
import Button from '../../Button/Button'
import iconStatus from '../../Button/images/icon-status.png'
import iconMessages from '../../Button/images/icon-messages.png'
import iconThreePoints from '../../Button/images/icon-three-points.png'


const Side = props => {
    return (
        <div className="side">
            <div className="side-header">
                <div className="side-container-buttons">
                    <Button iconImg={iconStatus} btnImgDesc='status'/>
                    <Button iconImg={iconMessages} btnImgDesc='new message'/>
                    <Button iconImg={iconThreePoints} btnImgDesc='more options'/>
                </div>
            </div>
        </div>
    )
}


export default Side