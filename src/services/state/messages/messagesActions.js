import * as actionsType from "./actionTypes";
import api from "../../api/api";

export default (messagesApi) => {
    return {
        sendMessage: (chatId, content) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.MESSAGES_SEND_MESSAGE_REQUEST });
                const data = await messagesApi.sendMessage(chatId, content);
                dispatch({
                    type: actionsType.MESSAGES_SEND_MESSAGE_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.MESSAGES_SEND_MESSAGE_FAIL,
                    error
                );
            }
        },
        getChatMessages: (chatId) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.MESSAGES_GET_CHAT_MESSAGES_REQUEST });
                const data = await messagesApi.getChatMessages(chatId);
                dispatch({
                    type: actionsType.MESSAGES_GET_CHAT_MESSAGES_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.MESSAGES_GET_CHAT_MESSAGES_FAIL,
                    error
                );
            }
        },
        readMessage: (messageId) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.MESSAGES_READ_MESSAGE_REQUEST });
                const data = await messagesApi.readMessage(messageId);
                dispatch({
                    type: actionsType.MESSAGES_READ_MESSAGE_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.MESSAGES_READ_MESSAGE_FAIL,
                    error
                );
            }
        },
    };
};
