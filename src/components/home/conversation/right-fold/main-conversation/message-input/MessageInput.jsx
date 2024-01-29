import React, { useState, useEffect } from "react";
import "./message-input.css";
import { VscSend } from "react-icons/vsc";
import { BiSolidSend } from "react-icons/bi";
import { useParams } from "react-router-dom";
import useRessource from "../../../../../../hooks/useRessource";
import { useDispatch, useSelector } from "react-redux";
import MessageInfo from "../message-info/MessageInfo";
import useSocket from "../../../../../../hooks/useSocket";

export default function MessageInput() {
    // variables
    // #############################################################################
    const [messageInfo, setMessageInfo] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const socket = useSocket();

    const user = useSelector((state) => {
        return state.auth.user;
    });

    const [chatsState] = useRessource("chats");
    const [
        { sendMessage = { loading: false, error: null, data: null } },
        messageRepo,
    ] = useRessource("messages", "Request");

    const [activeChat, setActiveChat] = useState(null);
    const [message, setMessage] = useState("");

    // useEffects
    // #############################################################################
    useEffect(() => {
        if (chatsState.chats) {
            const chat = chatsState.chats.find((chat) => chat._id === id);
            setActiveChat(chat);
        }
    }, [chatsState.chats, id]);

    useEffect(() => {
        // if user is typing
        if (activeChat) {
            // send typing event
            socket.emit("typing", {
                chat: activeChat,
                user: user,
                isTyping: true,
            });
        }
        const timer = setTimeout(() => {
            // clear typing event
            if (activeChat)
                socket.emit("typing", {
                    chat: activeChat,
                    user: user,
                    isTyping: false,
                });
        }, 3000);
        return () => clearTimeout(timer);
    }, [message]);

    useEffect(() => {
        if (sendMessage.error) alert(`ERROR : ${sendMessage.error}`);
        if (sendMessage.data?.message) setMessage("");
    }, [sendMessage]);

    // functions
    // #############################################################################
    const send = () => {
        if (message) {
            dispatch(messageRepo.sendMessage(id, message));
            setMessage("");
        } else {
            setMessageInfo(true);
            setTimeout(() => {
                setMessageInfo(false);
            }, 2000);
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

    // return
    // #############################################################################
    return (
        <div className="message-input-container">
            <div className="message-info-container">
                {messageInfo ? <MessageInfo /> : null}
            </div>
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
