import stateUtil from "../../../utils/state";
import * as actionsType from "./actionTypes";
import logger from "../../../utils/logger";

export default {
    default: (state = {}, action) => {
        let newState = { ...state };
        const keyWord = "MessageReducerDefault";
        switch (action.type) {
            case actionsType.MESSAGES_FIT_MESSAGES_LIST:
                newState[action.payload.id] = action.payload.messagesList;
                break;
            case actionsType.MESSAGES_ADD_MESSAGE:
                logger.log({ data: action.payload, keyWord });
                if (!newState[action.payload.id]) newState[action.payload.id] = [];
                newState[action.payload.id] = [
                    ...newState[action.payload.id],
                    action.payload.message,
                ];
                break;
            default:
                break;
        }
        return newState;
    },
    request: (state = {}, action) => {
        let newState = { ...state };
        let step = stateUtil.getRequestStep(action.type, "messages");
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
