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
        console.log("chatsReducer.request ##############################");
        console.log("chatsReducer.request : action.type : ", action.type);
        console.log("chatsReducer.request : action.payload : ", action.payload);
        let newState = { ...state };
        let step = stateUtil.getRequestStep(action.type);
        let methodName = stateUtil.getMethodName(action.type);
        console.log("chatsReducer.request : step : ", step);
        console.log("chatsReducer.request : methodName : ", methodName);
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
        console.log("chatsReducer.request : newState : ", newState);
        return newState;
    },
};
