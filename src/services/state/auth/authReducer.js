import * as actionTypes from "./actionTypes";

export default (state = {}, action) => {
    let newState = {...state};
    switch (action.type) {
        case actionTypes.AUTH_REQUEST:
        case actionTypes.AUTH_LOGIN_REQUEST:
            newState.loading = true;
            break;
        case actionTypes.AUTH_LOGIN_SUCCESS:
            console.log("authReducer.AUTH_LOGIN_SUCCESS action.payload :", action.payload);
            newState.loading = false;
            newState.user = action.payload?.user;
            break;
        case actionTypes.AUTH_REQUEST_SUCCESS:
            newState.loading = false;
            newState.data = action.payload;
            break;
        case actionTypes.AUTH_REQUEST_FAIL:
        case actionTypes.AUTH_LOGIN_FAIL:
            newState.loading = false;
            newState.error = action.payload;
            break;
        case actionTypes.AUTH_LOGOUT:
            newState.data = action.payload;
            break;

        default:
            break;
    }
    return newState;
};
