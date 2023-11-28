import * as actionTypes from "./actionTypes";

export default (state = {}, action) => {
    let newState = {...state};
    switch (action.type) {
        case actionTypes.AUTH_REQUEST:
            newState.loading = true;
            break;
        case actionTypes.AUTH_REQUEST_SUCCESS:
            newState.loading = false;
            newState.data = action.payload;
            break;
        case actionTypes.AUTH_REQUEST_FAIL:
            newState.loading = false;
            newState.error = action.payload;
            break;
        case actionTypes.AUTH_LOGOUT:
            break;

        default:
            break;
    }
    return newState;
};
