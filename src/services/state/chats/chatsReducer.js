import * as actionTypes from "./actionTypes";
import stateUtil from "../../../utils/state";

export default {
    default: (state = {}, action) => {
        let newState = { ...state };
        switch (action.type) {
            default:
                break;
        }
        return newState;
    },
    request: (state = {}, action) => {
        let newState = { ...state };
        let step = stateUtil.getRequestStep(action.type);
        let methodName = stateUtil.getMethodName(action.type);
        newState[methodName] = {};
        switch (step) {
            case "REQUEST":
                newState[methodName].loading = true;
                break;
            case "SUCCESS":
                newState[methodName].loading = false;
                newState[methodName].data = action.payload;
                break;
            case "FAIL":
                newState[methodName].loading = false;
                newState[methodName].error = action.payload;
                break;

            default:
                break;
        }
        return newState;
    },
};
