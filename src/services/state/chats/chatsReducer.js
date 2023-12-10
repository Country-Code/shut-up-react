import * as actionTypes from "./actionTypes";

export default (state = {}, action) => {
    let newState = {...state};
    switch (action.type) {
        case actionTypes.CHAT_REQUEST:
            newState.loading = true;
            break;
        case actionTypes.CHAT_REQUEST_SUCCESS:
            newState.loading = false;
            newState.data = action.payload;
            break;
        case actionTypes.CHAT_REQUEST_FAIL:
            newState.loading = false;
            newState.error = action.payload;
            break;

        default:
            break;
    }
    return newState;
};
