import React, { useEffect, useRef, useState } from "react";
import Message from "../message/Message";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useRessource from "../../../../../../hooks/useRessource";
import Loading from "../../../../../ui/Loading";
import "./messages-list.css";

export default function MessagesList() {
    const { id } = useParams();
    const [messagesList, setMessagesList] = useState(null);
    const [messagesRequestState, messageRepo] = useRessource(
        "messages",
        "Request"
    );
    const [messagesState] = useRessource("messages");

    const messageListRef = useRef(null);
    const dispatch = useDispatch();
    const { getChatMessages = { loading: false, error: null, data: null } } =
        messagesRequestState;

    useEffect(() => {
        if (messageRepo && id) {
            dispatch(messageRepo.getChatMessages(id));
        }
    }, [messageRepo, id]);

    useEffect(() => {
        const messagesListData = messagesState[id] ?? null;
        if (
            messageRepo &&
            messagesListData === null &&
            getChatMessages.data?.messages &&
            id
        ) {
            dispatch(
                messageRepo.fitMessagesList(id, getChatMessages.data?.messages)
            );
        }

        if (messagesListData !== null) {
            setMessagesList(getMessagesList(messagesListData));
        } else if (!getChatMessages?.loading && getChatMessages?.error) {
            setMessagesList(<div>Error : {getChatMessages.error}</div>);
        } else if (
            !getChatMessages?.loading &&
            getChatMessages?.data?.messages
        ) {
            setMessagesList(getMessagesList(getChatMessages?.data?.messages));
        } else if (getChatMessages?.loading) {
            setMessagesList(<Loading />);
        } else if (
            !getChatMessages.loading &&
            !getChatMessages.error &&
            !getChatMessages.data &&
            !messagesList
        ) {
            setMessagesList(
                <>
                    <h1>You start a new conversation</h1>
                    <p>Type your first message below.</p>
                </>
            );
        }
    }, [messagesRequestState]);

    const getMessagesList = (messages) => {
        return messages
            .toSorted((a, b) => a.updatedAt - b.updatedAt)
            .map((message) => <Message key={message._id} message={message} />);
    };
    const handleScroll = () => {};
    return (
        <div
            className="messages-list"
            ref={messageListRef}
            onScroll={handleScroll}
        >
            {messagesList}
        </div>
    );
}
