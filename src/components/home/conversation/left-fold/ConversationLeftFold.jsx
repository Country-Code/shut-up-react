import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useRessource from "../../../../hooks/useRessource";
import Loading from "../../../ui/Loading";
import Chat from "./chat/Chat";
import "./conversation-left-fold.css";

function ConversationLeftFold() {
    const [chatsList, setChatsList] = useState(null);
    const [chatRequestState, chatRepo] = useRessource("chats", "Request");
    const [chatState] = useRessource("chats");
    const dispatch = useDispatch();
    const { getAllChats } = chatRequestState;
    const { chats } = chatState;

    useEffect(() => {
        if (chatRepo && !chats) {
            dispatch(chatRepo.getAllChats());
        }
    }, [chatRepo]);
    useEffect(() => {
        if (getAllChats?.data?.chats && chatRepo) {
            dispatch(chatRepo.refreshChats(getAllChats?.data?.chats));
        }

        if (chats != null) {
            setChatsList(getChatsList(chats));
        } else if (!getAllChats?.loading && getAllChats?.error) {
            setChatsList(<div>Error : {getAllChats.error}</div>);
        } else if (!getAllChats?.loading && getAllChats?.data?.chats) {
            setChatsList(getChatsList(getAllChats?.data?.chats));
        } else if (getAllChats?.loading) {
            setChatsList(<Loading />);
        }
    }, [chats, getAllChats?.loading]);

    const getChatsList = (chatsItems) => {
        return chatsItems
            .toSorted((a, b) => b.updatedAt - a.updatedAt)
            .map((chat) => <Chat key={chat._id} chat={chat} />);
    };
    return (
        <div className="leftFold conversation-left-fold">
            <div className="fold-title">Conversations</div>
            <div className="fold-main">
                <div className="conversations">{chatsList}</div>
            </div>
        </div>
    );
}
export default ConversationLeftFold;
