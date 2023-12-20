import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useRessource from "../../../../hooks/useRessource";
import Loading from "../../../ui/Loading";
import Chat from "./chat/Chat";
import "./conversation-left-fold.css";

function ConversationLeftFold() {
    const [chatRequestState, chatRepo] = useRessource("chats", "Request");
    const dispatch = useDispatch();
    const { getAllChats } = chatRequestState;
    console.log("useEffect : ", chatRequestState)

    useEffect(() => {
        if (chatRepo) {
            dispatch(chatRepo.getAllChats());
        }
    }, [chatRepo]);

    return (
        <div className="leftFold conversation-left-fold">
            <div className="fold-title">Conversations</div>
            <div className="fold-main">
                <div className="conversations">
                    {!getAllChats.loading && getAllChats.error && <div>Error : {getAllChats.error}</div>}
                    {!getAllChats.loading &&
                        getAllChats.data?.chats &&
                        getAllChats.data.chats
                            .toSorted((a, b) => b.updatedAt - a.updatedAt)
                            .map((chat) => <Chat key={chat._id} chat={chat} />)}
                    {getAllChats.loading && <Loading />}
                </div>
            </div>
        </div>
    );
}
export default ConversationLeftFold;
