import * as actionsType from "./actionTypes";
import api from "../../api/api";

export default (chatApi) => {
    return {
        addUser: (chatId, userId) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.ADD_USER_REQUEST });
                const data = await chatApi.addUser(chatId, userId);
                dispatch({
                    type: actionsType.ADD_USER_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.ADD_USER_REQUEST_FAIL,
                    error
                );
            }
        },
        createGroup: (users, name) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.CREATE_GROUP_REQUEST });
                const data = await chatApi.createGroup(users, name);
                dispatch({
                    type: actionsType.CREATE_GROUP_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.CREATE_GROUP_REQUEST_FAIL,
                    error
                );
            }
        },
        getAllChats: () => async (dispatch) => {
            try {
                dispatch({ type: actionsType.GET_ALL_CHATS_REQUEST });
                const data = await chatApi.getAllChats();
                dispatch({
                    type: actionsType.GET_ALL_CHATS_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.GET_ALL_CHATS_REQUEST_FAIL,
                    error
                );
            }
        },
        getChatById: (chatId) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.GET_CHAT_BY_ID_REQUEST });
                const data = await chatApi.getChatById(chatId);
                dispatch({
                    type: actionsType.GET_CHAT_BY_ID_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.GET_CHAT_BY_ID_REQUEST_FAIL,
                    error
                );
            }
        },
        getChatByUser: (userId) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.GET_CHAT_BY_USER_REQUEST });
                const data = await chatApi.getChatByUser(userId);
                dispatch({
                    type: actionsType.GET_CHAT_BY_USER_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.GET_CHAT_BY_USER_REQUEST_FAIL,
                    error
                );
            }
        },
        removeUser: (chatId, userId) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.REMOVE_USER_REQUEST });
                const data = await chatApi.removeUser(chatId, userId);
                dispatch({
                    type: actionsType.REMOVE_USER_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.REMOVE_USER_REQUEST_FAIL,
                    error
                );
            }
        },
        renameChat: (chatId, name) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.RENAME_CHAT_REQUEST });
                const data = await chatApi.removeUser(chatId, name);
                dispatch({
                    type: actionsType.RENAME_CHAT_REQUEST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.RENAME_CHAT_REQUEST_FAIL,
                    error
                );
            }
        },
    };
};
