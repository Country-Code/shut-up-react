import React from "react";

const NewMessageInfo = ({ scrollBottom, isNewMessage }) => {
    const classList = "new-message-info " + (isNewMessage ? "" : "hidden");
    return (
        <div className={classList}>
            <button onClick={scrollBottom}>nouveau message reçu</button>
        </div>
    );
};

export default NewMessageInfo;
