import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useRessource from "../../../../../hooks/useRessource";
import "./fold-title.css";
import SearchInput from "../search-input/SearchInput";

export default function FoldTitle() {
    const { id } = useParams();
    const [chatRequestState, chatRepo] = useRessource("chats", "Request");
    const [chatState] = useRessource("chats");
    const dispatch = useDispatch();
    const { getChatById = { loading: false, error: null, data: null } } = chatRequestState;

    useEffect(() => {
        if (chatRepo && id) {
            dispatch(chatRepo.getChatById(id));
        }
    }, [chatRepo, id]);
    return (
        <div className="fold-title">
            {
                chatState.newChat && (
                    <SearchInput />
                )
            }
            {getChatById.loading && "..."}
            {!getChatById.loading && getChatById.error && (
                <>Error : {getChatById.error}</>
            )}
            {!getChatById.loading && !getChatById.error && getChatById.data && !chatState.newChat && (
                <>
                    <div className="ConversationTitle">
                        <img src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="" />
                        <span>{getChatById.data.chat?.name}</span></div>
                </>
            )}
            {!getChatById.loading && !getChatById.error && !getChatById.data && !chatState.newChat && (
                <>Conversation</>
            )}
        </div>
    );
}
