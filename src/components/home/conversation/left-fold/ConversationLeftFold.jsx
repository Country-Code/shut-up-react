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
        if (getAllChats?.data?.chats && chatRepo && chats === null) {
            dispatch(chatRepo.refreshChats(getAllChats?.data?.chats));
           
            const listChatsSortedByUpdatedAt = getAllChats?.data?.chats.sort((a, b) => {
                return new Date(b.updatedAt) - new Date(a.updatedAt);
            })
            dispatch(chatRepo.setIdActiveChat(listChatsSortedByUpdatedAt[0]?._id));
        }

        if (chats != null) {
            return;
        } else if (!getAllChats?.loading && getAllChats?.error) {
            setChatsList(<div>Error : {getAllChats.error}</div>);
        } else if (!getAllChats?.loading && getAllChats?.data?.chats) {
            setChatsList(getChatsList(getAllChats?.data?.chats));
        } else if (getAllChats?.loading) {
            setChatsList(<Loading />);
        }
    }, [getAllChats?.loading]);
    useEffect(() => {
        if (chats != null) {
            setChatsList(getChatsList(chats));
        }
    }, [chats]);

    const getChatsList = (chatsItems) => {
        return chatsItems
            .sort((a, b) => {
                return new Date(b.updatedAt) - new Date(a.updatedAt);
            })
            .map((chat) => <Chat key={chat._id} chat={chat} />);
    };
    const addNewChat = () => {
        dispatch(chatRepo.newChat(true))
    }
    return (
        <div className="leftFold conversation-left-fold">
            <div className="fold-title flex flex-row justify-between">
                <div className="title">
                    Conversations
                </div>
                <div className="new-conversation right-0">
                    <button onClick={addNewChat}>
                        new
                    </button>
                </div>
            </div>
            <div className="fold-main">
                <div className="conversations">{chatsList}</div>
            </div>
        </div>
    );
}
export default ConversationLeftFold;
