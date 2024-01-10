import authState from "./auth/initialState";
import chatsState from "./chats/initialState";
import messagesState from "./messages/initialState";
import socketState from "./socket/initialState";

export default {
    auth: authState,
    socket: socketState,
    chatsRequest: chatsState.request,
    chats: chatsState.default,
    messagesRequest: messagesState.request,
    messages: messagesState.default,
};
