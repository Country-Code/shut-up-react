import React from 'react'
import LeftFold from './left-fold'
import RightFold from './right-fold'

function Conversation() {
    return (
        <>
            <div className='leftFold-container '>
                <LeftFold />
            </div>
            <div className='rightFold-container'>
                <RightFold />
            </div>
        </>
    )
}

export default Conversation