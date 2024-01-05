import React, { useEffect, useRef } from "react";
import Message from "../message/Message";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useRessource from "../../../../../../hooks/useRessource";
import "./messages-list.css";

export default function MessagesList() {
    const { id } = useParams();
    const [messageRequestState, messageRepo] = useRessource(
        "messages",
        "Request"
    );
    const messageListRef = useRef(null);
    const dispatch = useDispatch();
    const { getChatMessages = { loading: false, error: null, data: null } } =
        messageRequestState;

    useEffect(() => {
        if (messageRepo && id) {
            dispatch(messageRepo.getChatMessages(id));
        }
    }, [messageRepo, id, getChatMessages]);
    useEffect(() => {
        scrollToTop();
    }, [getChatMessages]);

    const scrollToTop = () => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = 90;
        }
    };

    const handleScroll = () => {
    };

    return (
        <div
            className="messages-list"
            ref={messageListRef}
            onScroll={handleScroll}
        >
            {getChatMessages.loading && "..."}
            {!getChatMessages.loading && getChatMessages.error && (
                <>Error : {getChatMessages.error}</>
            )}
            {!getChatMessages.loading &&
                !getChatMessages.error &&
                getChatMessages.data?.messages &&
                getChatMessages.data?.messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            {!getChatMessages.loading &&
                !getChatMessages.error &&
                !getChatMessages.data && <><h1>You start a new conversation</h1><p>Type your first message below.</p></>}
        </div>
    );
}
