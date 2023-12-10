import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useRessource from "../../../../hooks/useRessource";
import Loading from "../../../ui/Loading";
import Chat from "./chat/Chat";
import "./conversation-left-fold.css";

function ConversationLeftFold() {
    const [chatState, chatRepo] = useRessource("chats");
    const dispatch = useDispatch();
    const {
        error,
        loading,
        data: { chats = null },
    } = chatState;

    useEffect(()=> {
        if (chatRepo) {
            dispatch(chatRepo.getAll());
        }
    }, [chatRepo])

    return (
        <div className="leftFold conversation-left-fold">
            <div className="fold-title">Conversations</div>
            <div className="fold-main">
                <div className="conversations">
                    {!loading && error &&
                        <div>Error : {error}</div>
                    }
                    {!loading && chats &&
                        chats.toSorted((a, b) => b.updatedAt - a.updatedAt).map((chat) => (
                            <Chat key={chat._id} chat={chat} />
                        ))
                    }
                    {loading && <Loading />}

                </div>
            </div>
        </div>
    )
}
export default ConversationLeftFold;