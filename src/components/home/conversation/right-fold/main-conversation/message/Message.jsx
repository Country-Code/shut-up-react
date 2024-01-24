import React, { useEffect, useState } from "react";
import date from "../../../../../../utils/date";
import user from "../../../../../../utils/user";

import "./message.css";

export default function Message({ message }) {
    const [isSender, setIsSender] = useState(false);
    const classList = isSender ? "message my-message" : "message";

    useEffect(() => {
        let email = user.getEmail()
        setIsSender(email === message.sender.email)
    }, [message]);


    return (
        <div className={classList} >
            <div className="message-date">
                {!isSender && `${message.sender.fullname}${" "}`}
                {date.getMessageDate(message.createdAt)}
            </div>
            <div className="message-content">{message.content}</div>
        </div>
    );
}
