import React from "react";

const NewMessageInfo = ({ scrollBottom, isNewMessage }) => {
    const classList = "new-message-info " + (isNewMessage ? "" : "hidden");
    return (
        <div className={classList}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
            >
                <path
                    fillRule="evenodd"
                    d="M10 2a.75.75 0 0 1 .75.75v12.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2Z"
                    clipRule="evenodd"
                />
            </svg>
            <button onClick={scrollBottom}>nouveau message reçu</button>
        </div>
    );
};

export default NewMessageInfo;
