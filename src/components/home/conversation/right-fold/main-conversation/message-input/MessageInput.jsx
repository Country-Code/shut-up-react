import React, { useState } from "react";
import "./message-input.css";
import { VscSend } from "react-icons/vsc";
import { BiSolidSend } from "react-icons/bi";
import { useParams } from "react-router-dom";
import useRessource from "../../../../../../hooks/useRessource";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function MessageInput() {
    const [message, setMessage] = useState("");
    const { id } = useParams();
    const [messageRequestState, messageRepo] = useRessource(
        "messages",
        "Request"
    );
    const dispatch = useDispatch();
    const { sendMessage = { loading: false, error: null, data: null } } =
        messageRequestState;

    useEffect(() => {
        if (sendMessage.error) alert(`ERROR : ${sendMessage.error}`);
        if (sendMessage.data?.message) refreshMessages;
    }, [sendMessage]);

    
    const send = () => {
        if (message)
        dispatch(messageRepo.sendMessage(id, message));
        refreshMessages()
    };

    const refreshMessages = () => {
        dispatch(messageRepo.getChatMessages(id));
    };

    const handleSendClick = () => {
        send();
    };

    const handleEnterPress = (e) => {
        if (e.key === "Enter") {
            send();
        }
    };

    return (
        <div className="message-input-container">
            <input
                type="text"
                className="message-input"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleEnterPress}
            />
            <div className="message-send-button" onClick={handleSendClick}>
                <div className="main-icon">
                    <VscSend size={32} />
                </div>
                <div className="onsend-icon">
                    <BiSolidSend size={32} />
                </div>
            </div>
        </div>
    );
}
