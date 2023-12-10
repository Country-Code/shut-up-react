import * as actionsType from "./actionTypes";
import api from "../../api/api";

export default (chatApi) => {
    console.log("ChatActions : ")
    return {
        create: (users, name) => async (dispatch) => {
            console.log("chat.create action.");
            try {
                dispatch({ type: actionsType.CHAT_REQUEST });
                const data = await api.call(chatApi, "create", [users, name]);
                dispatch({
                    type: actionsType.CHAT_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(dispatch, actionsType.CHAT_REQUEST_FAIL, error);
            }
        },
        getAll: () => async (dispatch) => {
            console.log("chat.getAll action.");
            try {
                dispatch({ type: actionsType.CHAT_REQUEST });
                const data = await api.call(chatApi, "getAll");
                dispatch({
                    type: actionsType.CHAT_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(dispatch, actionsType.CHAT_REQUEST_FAIL, error);
            }
        },
    };
};
