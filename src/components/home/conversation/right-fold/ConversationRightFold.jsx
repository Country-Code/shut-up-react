import React from "react";
import "./conversation-right-fold.css";
import MainConversation from "./main-conversation/MainConversation";
import "./conversation-right-fold.css";
import FoldTitle from "./fold-title/FoldTitle";

function ConversationRightFold() {
    return (
        <div className="rightFold conversation-right-fold">
            <FoldTitle />
            <div className="fold-main">
                <MainConversation />
            </div>
        </div>
    );
}

export default ConversationRightFold;
