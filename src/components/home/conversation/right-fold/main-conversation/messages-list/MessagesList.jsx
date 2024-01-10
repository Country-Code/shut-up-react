import React, { useEffect, useRef, useState } from "react";
import Message from "../message/Message";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useRessource from "../../../../../../hooks/useRessource";
import Loading from "../../../../../ui/Loading";
import "./messages-list.css";
import logger from "../../../../../../utils/logger";

export default function MessagesList() {
    const keyWord = "MessageListComp";
    logger.log({ data: keyWord.repeat(20) + "calling", keyWord });
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
        logger.log({ data: id, keyWord, title: "id" });
    }, [id]);
    useEffect(() => {
        logger.log({ data: messagesList, keyWord, title: "messagesList" });
    }, [messagesList]);
    useEffect(() => {
        logger.log({
            data: messagesRequestState,
            keyWord,
            title: "messagesRequestState",
        });
        if (messagesRequestState?.getChatMessages)
            logger.log({
                data: messagesRequestState?.getChatMessages,
                keyWord,
                title: "messagesRequestState.getChatMessages",
            });
        if (messagesRequestState?.getChatMessages?.data)
            logger.log({
                data: messagesRequestState?.getChatMessages?.data,
                keyWord,
                title: "messagesRequestState.getChatMessages?.data",
            });
    }, [messagesRequestState]);
    useEffect(() => {
        logger.log({
            data: messagesState,
            keyWord,
            title: "messagesState",
        });
    }, [messagesState]);
    useEffect(() => {
        logger.log({
            data: getChatMessages,
            keyWord,
            title: "getChatMessages",
        });
    }, [getChatMessages]);

    useEffect(() => {
        if (messageRepo && id && !messagesState[id]) {
            dispatch(messageRepo.getChatMessages(id));
        }
    }, [messageRepo, id]);

    useEffect(() => {
        const messagesListData = messagesState[id] ?? null;

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
    }, [getChatMessages, messagesState, id]);

    useEffect(() => {
        if (!getChatMessages.loading && getChatMessages.data && messageRepo) {
            dispatch(
                messageRepo.fitMessagesList(id, getChatMessages.data?.messages)
            );
        }
    }, [getChatMessages.loading]);

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
