import React from "react";
import Message from "../message/Message";

export default function MessagesList({ messages }) {
    return (
        <div className="messages-list">
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </div>
    );
}
