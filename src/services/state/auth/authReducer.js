import * as actionTypes from "./actionTypes";

export default (state = {}, action) => {
    let newState = {...state};
    switch (action.type) {
        case actionTypes.AUTH_REQUEST:
            newState.loading = true;
            break;
        case actionTypes.AUTH_LOGIN_SUCCESS:
        case actionTypes.AUTH_REGISTER_SUCCESS:
            newState.loading = false;
            newState.userInfo = action.payload;
            console.log("AUTH_LOGIN_SUCCESS newState : ", newState);
            break;
        case actionTypes.AUTH_LOGIN_FAIL:
        case actionTypes.AUTH_REGISTER_FAIL:
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
