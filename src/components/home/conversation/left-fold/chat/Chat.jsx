import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import date from "../../../../../utils/date";
import "./chat.css";
import useRessource from "../../../../../hooks/useRessource";
import { useDispatch } from "react-redux";

export default function Chat({ chat }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [{ idActiveChat }, chatRepo] =  useRessource("chats");
    const dispatch = useDispatch();
    const displayChat = (id) => {
        dispatch(chatRepo.setIdActiveChat(id));
        navigate(`${id}`);
    };

    useEffect(() => {
        const id = idActiveChat;
        if(id !== null){
            navigate(`${id}`);
        }
    }, [idActiveChat]);

    let classList = `userConversation `;
    classList += chat._id === id ? "active" : "";
    return (
        <button
            className={classList}
            key={chat._id}
            onClick={() => displayChat(chat._id)}
        >
            <div className='userConversationInfo-container'>
                <div className='userConversationInfo-img'>
                    <img src={chat.users[1].image} alt="" />
                </div>
                <div className="userConversationInfo-name">
                    <span>{chat.name}</span>
                </div>
                <div className='userConversationInfo-date'>
                    {date.getMessageDate(chat.lastMessage?.createdAt)}
                </div>
                <div className='userConversationInfo-message'>
                    <p className='text-left'>{chat.lastMessage?.content}</p>
                </div>
            </div>
        </button>
    )
}
