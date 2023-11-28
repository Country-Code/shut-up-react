import * as actionsType from "./actionTypes";

export default (authApi) => {
    console.log("AuthActions : ")
    return {
        register: (fullname, email, password) => async (dispatch) => {
            console.log("auth.register action.");
            try {
                dispatch({ type: actionsType.AUTH_REQUEST });
                const { user } = await authApi.register(fullname, email, password);
                console.log("auth.register action. user  : ", user)
                dispatch({
                    type: actionsType.AUTH_REGISTER_SUCCESS,
                    payload: user,
                });
                localStorage.setItem('userInfo', JSON.stringify(user));
            } catch (error) {
                dispatch({
                    type: actionsType.AUTH_REGISTER_FAIL,
                    payload: error.response.data.message ?? error.message,
                });
            }
        },
        login: (email, password) => async (dispatch) => {
            console.log("auth.login action.");
            try {
                dispatch({ type: actionsType.AUTH_REQUEST });
                const { user } = await authApi.login(email, password);
                console.log("auth.login action. user  : ", user)
                dispatch({
                    type: actionsType.AUTH_LOGIN_SUCCESS,
                    payload: user,
                });
                localStorage.setItem('userInfo', JSON.stringify(user));
        } catch (error) {
                dispatch({
                    type: actionsType.AUTH_LOGIN_FAIL,
                    payload: error?.response?.data?.message ?? error.message,
                });
            }
        },
        logout: () => (dispatch) => {
            localStorage.removeItem("userInfo");
            dispatch({
                type: actionsType.AUTH_LOGOUT,
            });
            document.location.href = "/login";
        },
    };
};
