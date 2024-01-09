import React, { useState, useEffect } from "react";
import "./message-input.css";
import { VscSend } from "react-icons/vsc";
import { BiSolidSend } from "react-icons/bi";
import { useParams } from "react-router-dom";
import useRessource from "../../../../../../hooks/useRessource";
import { useDispatch, useSelector } from "react-redux";

export default function MessageInput() {
    const [message, setMessage] = useState("");
    const [isRecieveMessageOn, setIsRecieveMessageOn] = useState(false);
    const { id } = useParams();
    const [messagesRequestState, messageRepo] = useRessource(
        "messages",
        "Request"
    );
    const socketState = useSelector((state) => state.socket);
    const dispatch = useDispatch();
    const { sendMessage = { loading: false, error: null, data: null } } =
        messagesRequestState;

    useEffect(() => {
        if (socketState?.socket && messageRepo && !isRecieveMessageOn) {
            setIsRecieveMessageOn((oldState) => {
                if (!oldState)
                    socketState.socket.on("recieve_message", (message) => {
                        dispatch(
                            messageRepo.addMessageToList(
                                message.chat?._id,
                                message
                            )
                        );
                    });
                return true;
            });
        }
    }, [socketState, messageRepo]);

    useEffect(() => {
        if (sendMessage.error) alert(`ERROR : ${sendMessage.error}`);
        if (sendMessage.data?.message) setMessage("");
    }, [sendMessage]);

    const send = () => {
        if (message) {
            dispatch(messageRepo.sendMessage(id, message));
            setMessage("");
        }
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
            <div className="message-input">
                <input
                    type="text"
                    className="message-input-text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleEnterPress}
                />
                <div className="message-send-button" onClick={handleSendClick}>
                    <div className="main-icon">
                        <VscSend size={20} />
                    </div>
                    <div className="onsend-icon">
                        <BiSolidSend size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}
