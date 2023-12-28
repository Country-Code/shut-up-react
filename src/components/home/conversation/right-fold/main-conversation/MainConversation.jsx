import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useRessource from "../../../../../hooks/useRessource";
import MessageInput from "./message-input/MessageInput";
import MessagesList from "./messages-list/MessagesList";
import "./main-conversation.css";

export default function MainConversation() {
    const { id } = useParams();
    const [messageRequestState, messageRepo] = useRessource(
        "messages",
        "Request"
    );
    const dispatch = useDispatch();
    const { getChatMessages = { loading: false, error: null, data: null } } =
        messageRequestState;
    return (
        <div className="main-conversation">
            <MessagesList />
            <MessageInput />
        </div>
    );
}
