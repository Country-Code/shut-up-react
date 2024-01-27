import * as actionsType from "./actionTypes";
import api from "../../api/api";

export default (chatApi) => {
    return {
        addUser: (chatId, userId) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.CHATS_ADD_USER_REQUEST });
                const data = await chatApi.addUser(chatId, userId);
                dispatch({
                    type: actionsType.CHATS_ADD_USER_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(dispatch, actionsType.CHATS_ADD_USER_FAIL, error);
            }
        },
        createGroup: (users, name) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.CHATS_CREATE_GROUP_REQUEST });
                const data = await chatApi.createGroup(users, name);
                dispatch({
                    type: actionsType.CHATS_CREATE_GROUP_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.CHATS_CREATE_GROUP_FAIL,
                    error
                );
            }
        },
        getAllChats: () => async (dispatch) => {
            try {
                dispatch({ type: actionsType.CHATS_GET_ALL_CHATS_REQUEST });
                const data = await chatApi.getAllChats();
                dispatch({
                    type: actionsType.CHATS_GET_ALL_CHATS_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.CHATS_GET_ALL_CHATS_FAIL,
                    error
                );
            }
        },
        getChatById: (chatId) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.CHATS_GET_CHAT_BY_ID_REQUEST });
                const data = await chatApi.getChatById(chatId);
                dispatch({
                    type: actionsType.CHATS_GET_CHAT_BY_ID_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.CHATS_GET_CHAT_BY_ID_FAIL,
                    error
                );
            }
        },
        getChatByUser: (userId) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.CHATS_GET_CHAT_BY_USER_REQUEST });
                const data = await chatApi.getChatByUser(userId);
                dispatch({
                    type: actionsType.CHATS_GET_CHAT_BY_USER_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.CHATS_GET_CHAT_BY_USER_FAIL,
                    error
                );
            }
        },
        removeUser: (chatId, userId) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.CHATS_REMOVE_USER_REQUEST });
                const data = await chatApi.removeUser(chatId, userId);
                dispatch({
                    type: actionsType.CHATS_REMOVE_USER_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.CHATS_REMOVE_USER_FAIL,
                    error
                );
            }
        },
        renameChat: (chatId, name) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.CHATS_RENAME_CHAT_REQUEST });
                const data = await chatApi.removeUser(chatId, name);
                dispatch({
                    type: actionsType.CHATS_RENAME_CHAT_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.CHATS_RENAME_CHAT_FAIL,
                    error
                );
            }
        },
        refreshChats: (chats) => async (dispatch) => {
            dispatch({ type: actionsType.CHATS_REFRESH_CHATS, payload: chats });
        },
        setIdActiveChat: (idActiveChat) => (dispatch) => {
            dispatch({
                type: actionsType.CHATS_SET_ID_ACTIVE_CHAT,
                payload: idActiveChat,
            });
        },
    };
};
