import * as actionsType from "./actionTypes";

export default (authApi) => {
    console.log("AuthActions : ")
    return {
        register: (fullname, email, password) => async (dispatch) => {
            console.log("auth.register action.");
            try {
                dispatch({ type: actionsType.AUTH_REQUEST });
                const data = await authApi.register(
                    fullname,
                    email,
                    password
                );
                dispatch({
                    type: actionsType.AUTH_REQUEST_SUCCESS,
                    payload: data,
                });
                localStorage.setItem("auth-data", JSON.stringify(data));
            } catch (error) {
                dispatch({
                    type: actionsType.AUTH_REQUEST_FAIL,
                    payload: error.response.data.message ?? error.message,
                });
            }
        },
        login: (email, password) => async (dispatch) => {
            console.log("auth.login action.");
            try {
                dispatch({ type: actionsType.AUTH_REQUEST });
                const data = await authApi.login(email, password);
                dispatch({
                    type: actionsType.AUTH_REQUEST_SUCCESS,
                    payload: data,
                });
                localStorage.setItem("auth-data", JSON.stringify(data));
            } catch (error) {
                dispatch({
                    type: actionsType.AUTH_REQUEST_FAIL,
                    payload: error?.response?.data?.message ?? error.message,
                });
            }
        },
        reset: (newPassword, resetPasswordToken) => async (dispatch) => {
            console.log(`authApi->reset(${newPassword}, ${resetPasswordToken})`)
            try {
                dispatch({ type: actionsType.AUTH_REQUEST });
                const data = await authApi.reset(newPassword, resetPasswordToken);
                dispatch({
                    type: actionsType.AUTH_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                console.log(`authApi->reset->error : `, error?.response?.data?.message)
                dispatch({
                    type: actionsType.AUTH_REQUEST_FAIL,
                    payload: error?.response?.data?.message ?? error.message,
                });
            }
        },
        forgot: (email) => async (dispatch) => {
            console.log(`authApi->forgot(${email})`)
            try {
                dispatch({ type: actionsType.AUTH_REQUEST });
                const data = await authApi.forgot(email);
                dispatch({
                    type: actionsType.AUTH_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                console.log(`authApi->fogot->error : `, error?.response?.data?.message)
                dispatch({
                    type: actionsType.AUTH_REQUEST_FAIL,
                    payload: error?.response?.data?.message ?? error.message,
                });
            }
        },
        logout: () => (dispatch) => {
            localStorage.removeItem("auth-data");
            dispatch({
                type: actionsType.AUTH_LOGOUT,
            });
            document.location.href = "/login";
        },
    };
};
