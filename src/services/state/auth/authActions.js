import * as actionsType from "./actionTypes";
import api from "../../api/api";

export default (authApi) => {
    return {
        register: (fullname, email, password) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.AUTH_REQUEST });
                const data = await authApi.register(fullname, email, password);
                dispatch({
                    type: actionsType.AUTH_REQUEST_SUCCESS,
                    payload: data,
                });
                localStorage.setItem("auth-data", JSON.stringify(data));
                if (data.token) {
                    localStorage.setItem("token", data.token);
                }
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.AUTH_REQUEST_FAIL,
                    error,
                );
            }
        },
        login: (email, password) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.AUTH_LOGIN_REQUEST });
                const data = await authApi.login(email, password);
                dispatch({
                    type: actionsType.AUTH_LOGIN_SUCCESS,
                    payload: data,
                });
                localStorage.setItem("auth-data", JSON.stringify(data));
                if (data.token) {
                    localStorage.setItem("token", data.token);
                }
            } catch (error) {
                api.dispatchError(dispatch, actionsType.AUTH_LOGIN_FAIL, error);
            }
        },
        reset: (newPassword, resetPasswordToken) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.AUTH_REQUEST });
                const data = await authApi.reset(
                    newPassword,
                    resetPasswordToken,
                );
                dispatch({
                    type: actionsType.AUTH_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.AUTH_REQUEST_FAIL,
                    error,
                );
            }
        },
        forgot: (email) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.AUTH_REQUEST });
                const data = await authApi.forgot(email);
                dispatch({
                    type: actionsType.AUTH_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                dispatch({
                    type: actionsType.AUTH_REQUEST_FAIL,
                    payload: error?.response?.data?.message ?? error.message,
                });
            }
        },
        logout: () => (dispatch) => {
            console.log("Logout");
            // @TODO is calling /logout mandatory ???
            localStorage.removeItem("auth-data");
            localStorage.removeItem("token");
            dispatch({
                type: actionsType.AUTH_LOGOUT,
                payload: { token: null, user: null },
            });
        },
    };
};
