import React from 'react'
import ConversationLeftFold from './left-fold/ConversationLeftFold'
import ConversationRightFold from './right-fold/ConversationRightFold'

function Conversation() {
    return (
        <>
            <div className='leftFold-container '>
                <ConversationLeftFold />
            </div>
            <div className='rightFold-container'>
                <ConversationRightFold />
            </div>
        </>
    )
}

export default Conversation