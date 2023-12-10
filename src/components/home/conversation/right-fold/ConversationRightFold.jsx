import React from 'react';
import "./conversation-right-fold.css";
import MainConversation from './main-conversation/MainConversation';
import "./conversation-right-fold.css";

function ConversationRightFold() {
    return (
        <div className='rightFold conversation-right-fold'>
            <div className="fold-title">Contact</div>
            <div className="fold-main">
                <MainConversation />
            </div>
        </div>
    )
}

export default ConversationRightFold