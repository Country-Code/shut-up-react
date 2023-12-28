import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./chat.css";

export default function Chat({ chat }) {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const displayChat = (id) => {
        // console.log(id);
        navigate(`${id}`)
    };
    console.log(chat)
    let classList = `userConversation `;
    classList += chat._id === id ? "active" : "";
    return (
        <button
            className={classList}
            key={chat._id}
            onClick={() => displayChat(chat._id)}
        >
            <img src={chat.users[1].image} alt="" />
            <div className="userConversationInfo">
                <span>{chat.name}</span>
                <p>{chat.lastMessage?.content}</p>
            </div>
        </button>
    )
}
