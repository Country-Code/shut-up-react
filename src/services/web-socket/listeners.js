import * as chatsActionTypes from "../state/chats/actionTypes";
import * as messagesActionTypes from "../state/messages/actionTypes";
import * as socketActionTypes from "../state/socket/actionTypes";

export const defaultListeners = {
    recieve_message: (dispatch) => {
        return (message) => {
            console.log("listeners.receive_message :", message);
            const chatId = message?.chat?._id;
            dispatch({
                type: messagesActionTypes.MESSAGES_ADD_MESSAGE,
                payload: { id: chatId, message },
            });
            dispatch({
                type: chatsActionTypes.CHATS_REFRESH_NEW_MESSAGE,
                payload: { id: chatId, message },
            });
        };
    },
    is_typing: (dispatch) => {
        return (data) => {
            console.log("listeners.is_typing :", data);
            dispatch({
                type: chatsActionTypes.CHATS_REFRESH_TYPING_USERS,
                payload: data,
            });
        };
    },
    connected: (dispatch) => {
        return () => {
            console.log("listeners.connected");
            dispatch({
                type: socketActionTypes.SOCKET_SET_IS_CONNECTED,
                payload: { isConnected: true },
            });
        };
    },
};
