import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useRessource from "../../../../../hooks/useRessource";

export default function FoldTitle() {
    const { id } = useParams();
    const [chatRequestState, chatRepo] = useRessource("chats", "Request");
    const dispatch = useDispatch();
    const { getChatById = {loading: false, error: null, data: null} } = chatRequestState;
    console.log("useEffect : ", chatRequestState);

    useEffect(() => {
      console.log("FoldTitle.useEffect : ", getChatById)
        if (chatRepo && id) {
            dispatch(chatRepo.getChatById(id));
        }
    }, [chatRepo, id]);
    return (
        <div className="fold-title">
            {getChatById.loading && "..."}
            {!getChatById.loading && getChatById.error && (
                <>Error : {getChatById.error}</>
            )}
            {!getChatById.loading && !getChatById.error && getChatById.data && (
                <>{getChatById.data.chat?.name}</>
            )}
            {!getChatById.loading && !getChatById.error && !getChatById.data && (
                <>Conversation</>
            )}
        </div>
    );
}
