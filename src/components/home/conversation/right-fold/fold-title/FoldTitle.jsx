import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRessource from "../../../../../hooks/useRessource";
import "./fold-title.css";
import SearchInput from "../search-input/SearchInput";

export default function FoldTitle() {
    // HOOKS :
    // ###########################################################
    const dispatch = useDispatch();
    const { id } = useParams();
    const [chatName, setChatName] = useState("");
    const [chatPicSrc, setChatPicSrc] = useState("");
    const [chat, setChat] = useState(null);
    const user = useSelector((state) => state.auth?.user);
    const [
        { getChatById = { loading: false, data: null, error: null } },
        chatRepo,
    ] = useRessource("chats", "Request");
    const [chatState] = useRessource("chats");

    // USEEFFECTS :
    // ###########################################################
    // #1 : get chat from state
    useEffect(() => {
        if (id && chatState) {
            setChat(chatState.chats?.find((chat) => chat._id === id));
        }
    }, [id]);
    // #2 : get chat from server
    useEffect(() => {
        if (chatRepo && id && !chat) {
            dispatch(chatRepo.getChatById(id));
        }
    }, [chatRepo, id]);
    // #3 : set chat name and pic
    useEffect(() => {
        if (chat && chatRepo && user) {
            setChatName(chatRepo.getChatName(chat, user));
            setChatPicSrc(chatRepo.getChatPicSrc(chat, user));
        }
    }, [chat, chatRepo]);

    // RETURN :
    // ###########################################################
    return (
        <div className="fold-title">
            {/* SearchInput part */}
            {chatState.newChat && <SearchInput />}
            {/* loading part */}
            {!chat && getChatById.loading && "..."}
            {/* Error part */}
            {!chat && !getChatById.loading && getChatById.error && (
                <>Error : {getChatById.error}</>
            )}
            {/* Title content part */}
            {chat && !chatState.newChat && (
                <>
                    <div className="ConversationTitle">
                        <img src={chatPicSrc} alt="" />
                        <span>{chatName}</span>
                    </div>
                </>
            )}
            {/* No active chat part */}
            {!getChatById.loading &&
                !getChatById.error &&
                !getChatById.data &&
                !chatState.newChat && <>Conversation</>}
        </div>
    );
}
