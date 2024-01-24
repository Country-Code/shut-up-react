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
                })
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
