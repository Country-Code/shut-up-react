import * as ActionTypes from "./actionTypes";
import * as chatsActionTypes from "../chats/actionTypes";
import * as socketActionTypes from "../socket/actionTypes";

import api from "../../api/api";

export default (messagesApi) => {
    return {
        sendMessage: (chatId, content) => async (dispatch) => {
            try {
                dispatch({ type: ActionTypes.MESSAGES_SEND_MESSAGE_REQUEST });
                const data = await messagesApi.sendMessage(chatId, content);
                dispatch({
                    type: ActionTypes.MESSAGES_SEND_MESSAGE_SUCCESS,
                    payload: data,
                });
                dispatch({
                    type: ActionTypes.MESSAGES_ADD_MESSAGE,
                    payload: { id: chatId, message: data.message },
                });
                dispatch({
                    type: chatsActionTypes.CHATS_REFRESH_NEW_MESSAGE,
                    payload: { id: chatId, message: data.message },
                });
                dispatch({
                    type: socketActionTypes.SOCKET_EMIT_NEW_MESSAGE,
                    payload: { message: data.message },
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    ActionTypes.MESSAGES_SEND_MESSAGE_FAIL,
                    error,
                );
            }
        },
        getChatMessages: (chatId) => async (dispatch) => {
            try {
                dispatch({
                    type: ActionTypes.MESSAGES_GET_CHAT_MESSAGES_REQUEST,
                });
                const data = await messagesApi.getChatMessages(chatId);
                dispatch({
                    type: ActionTypes.MESSAGES_GET_CHAT_MESSAGES_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    ActionTypes.MESSAGES_GET_CHAT_MESSAGES_FAIL,
                    error,
                );
            }
        },
        readMessage: (messageId) => async (dispatch) => {
            try {
                dispatch({ type: ActionTypes.MESSAGES_READ_MESSAGE_REQUEST });
                const data = await messagesApi.readMessage(messageId);
                dispatch({
                    type: ActionTypes.MESSAGES_READ_MESSAGE_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    ActionTypes.MESSAGES_READ_MESSAGE_FAIL,
                    error,
                );
            }
        },
        fitMessagesList: (id, messagesList) => (dispatch) => {
            dispatch({
                type: ActionTypes.MESSAGES_FIT_MESSAGES_LIST,
                payload: { id, messagesList },
            });
        },
        addMessageToList: (id, message) => (dispatch) => {
            dispatch({
                type: ActionTypes.MESSAGES_ADD_MESSAGE,
                payload: { id, message },
            });
            dispatch({
                type: chatsActionTypes.CHATS_REFRESH_NEW_MESSAGE,
                payload: { id, message },
            });
        },
    };
};
