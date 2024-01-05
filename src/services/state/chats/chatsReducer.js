import stateUtil from "../../../utils/state";
import * as actionTypes from "./actionTypes";

export default {
    default: (state = {}, action) => {
        let newState = { ...state };
        switch (action.type) {
            case actionTypes.REFRESH_CHATS:
                newState.chats = action.payload;
                break;
            default:
                break;
        }
        return newState;
    },
    request: (state = {}, action) => {
        let newState = { ...state };
        let step = stateUtil.getRequestStep(action.type);
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
