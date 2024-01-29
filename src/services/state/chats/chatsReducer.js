import stateUtil from "../../../utils/state";
import * as actionTypes from "./actionTypes";

export default {
    default: (state = {}, action) => {
        let newState = { ...state };
        switch (action.type) {
            case actionTypes.CHATS_REFRESH_CHATS:
                newState.chats = action.payload;
                break;
            case actionTypes.CHATS_REFRESH_NEW_MESSAGE:
                newState.chats = newState.chats.map((chat) => {
                    if (chat._id === action.payload.id) {
                        chat.lastMessage = action.payload.message;
                        chat.updatedAt = action.payload.message.createdAt;
                    }
                    return chat;
                });
                break;
            case actionTypes.CHATS_REFRESH_TYPING_USERS:
                if (!newState?.typing) newState.typing = [];
                if (!newState.typing[action.payload.chat._id]) {
                    newState.typing[action.payload.chat._id] = [];
                }

                // remove user from typing list, to prevent duplicates
                newState.typing[action.payload.chat._id] = newState.typing[
                    action.payload.chat._id
                ].filter((user) => user._id !== action.payload.user._id);

                // add user to typing list if is typing
                if (action.payload.isTyping) {
                    newState.typing[action.payload.chat._id].push(
                        action.payload.user,
                    );
                }

                console.log("newState.typing :", newState.typing);
                break;
            case actionTypes.CHATS_SET_ID_ACTIVE_CHAT:
                newState.idActiveChat = action.payload?.id;
                break;
            case actionTypes.CHATS_NEW_CHAT:
                newState.newChat = action.payload;
                break;
            default:
                break;
        }
        return newState;
    },
    request: (state = {}, action) => {
        let newState = { ...state };
        let step = stateUtil.getRequestStep(action.type, "chats");
        if (step === "UNKNOWN") return newState;
        let methodName = stateUtil.getMethodName(action.type);
        if (!newState[methodName]) newState[methodName] = {};
        switch (step) {
            case "start":
                newState[methodName]["loading"] = true;
                break;
            case "success":
                newState[methodName]["loading"] = false;
                newState[methodName].data = action.payload;
                break;
            case "fail":
                newState[methodName]["loading"] = false;
                newState[methodName].error = action.payload;
                break;

            default:
                break;
        }
        return newState;
    },
};
