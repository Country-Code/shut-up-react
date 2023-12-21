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
        console.log("messagesReducer.request ##############################");
        console.log("messagesReducer.request : action.type : ", action.type);
        console.log("messagesReducer.request : action.payload : ", action.payload);
        let newState = { ...state };
        let step = stateUtil.getRequestStep(action.type);
        let methodName = stateUtil.getMethodName(action.type);
        console.log("messagesReducer.request : step : ", step);
        console.log("messagesReducer.request : methodName : ", methodName);
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
        console.log("messagesReducer.request : newState : ", newState);
        return newState;
    },
};
