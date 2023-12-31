import * as actionsType from "./actionTypes";
import api from "../../api/api";

export default (messagesApi) => {
    return {
        sendMessage: (chatId, content) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.SEND_MESSAGE_REQUEST });
                const data = await messagesApi.sendMessage(chatId, content);
                dispatch({
                    type: actionsType.SEND_MESSAGE_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(dispatch, actionsType.SEND_MESSAGE_FAIL, error);
            }
        },
        getChatMessages: (chatId) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.GET_CHAT_MESSAGES_REQUEST });
                const data = await messagesApi.getChatMessages(chatId);
                dispatch({
                    type: actionsType.GET_CHAT_MESSAGES_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(dispatch, actionsType.GET_CHAT_MESSAGES_FAIL, error);
            }
        },
        readMessage: (messageId) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.READ_MESSAGE_REQUEST });
                const data = await messagesApi.readMessage(messageId);
                dispatch({
                    type: actionsType.READ_MESSAGE_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(dispatch, actionsType.READ_MESSAGE_FAIL, error);
            }
        },
    };
};
