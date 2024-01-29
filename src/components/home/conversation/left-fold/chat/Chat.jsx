import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import date from "../../../../../utils/date";
import "./chat.css";
import useRessource from "../../../../../hooks/useRessource";
import { useDispatch, useSelector } from "react-redux";

export default function Chat({ chat }) {
    // HOOKS :
    // ###########################################################
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [chatName, setChatName] = useState("");
    const [chatPicSrc, setChatPicSrc] = useState("");
    const user = useSelector((state) => state.auth?.user);
    const [{ idActiveChat }, chatRepo] = useRessource("chats");

    // variables :
    // ###########################################################
    let classList = `userConversation `;
    classList += chat._id === id ? "active" : "";

    // USEEFFECTS :
    // ###########################################################
    // #1 : set active chat
    useEffect(() => {
        const id = idActiveChat;
        if (id !== null) {
            navigate(`${id}`);
        }
    }, [idActiveChat]);
    // #2 : set chat name and pic
    useEffect(() => {
        if (chat && chatRepo && user) {
            setChatName(chatRepo.getChatName(chat, user));
            setChatPicSrc(chatRepo.getChatPicSrc(chat, user));
        }
    }, [chat, chatRepo]);

    // FUNCTIONS :
    // ###########################################################
    const displayChat = (id) => {
        dispatch(chatRepo.setIdActiveChat(id));
        navigate(`${id}`);
    };

    // RETURN :
    // ###########################################################
    return (
        <button
            className={classList}
            key={chat._id}
            onClick={() => displayChat(chat._id)}
        >
            <div className="userConversationInfo-container">
                <div className="userConversationInfo-img">
                    <img src={chatPicSrc} alt="" />
                </div>
                <div className="userConversationInfo-name">
                    <span>{chatName}</span>
                </div>
                <div className="userConversationInfo-date">
                    {date.getMessageDate(chat.lastMessage?.createdAt)}
                </div>
                <div className="userConversationInfo-message">
                    <p className="text-left">{chat.lastMessage?.content}</p>
                </div>
            </div>
        </button>
    );
}
