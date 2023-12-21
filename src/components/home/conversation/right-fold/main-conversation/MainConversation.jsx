import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useRessource from "../../../../../hooks/useRessource";
import MessagesList from "./messages-list/MessagesList";

export default function MainConversation() {
    const { id } = useParams();
    const [messageRequestState, messageRepo] = useRessource(
        "messages",
        "Request"
    );
    const dispatch = useDispatch();
    const { getChatMessages = { loading: false, error: null, data: null } } =
        messageRequestState;

    useEffect(() => {
        console.log("FoldTitle.useEffect : ", getChatMessages);
        if (messageRepo && id) {
            dispatch(messageRepo.getChatMessages(id));
        }
    }, [messageRepo, id]);
    return (
        <div className="messages-field">
            {getChatMessages.loading && "..."}
            {!getChatMessages.loading && getChatMessages.error && (
                <>Error : {getChatMessages.error}</>
            )}
            {!getChatMessages.loading &&
                !getChatMessages.error &&
                getChatMessages.data?.messages && (
                    <MessagesList messages={getChatMessages.data.messages} />
                )}
            {!getChatMessages.loading &&
                !getChatMessages.error &&
                !getChatMessages.data && <>Conversation</>}
        </div>
    );
}
