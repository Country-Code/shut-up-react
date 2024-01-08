import authState from "./auth/initialState";
import chatsState from "./chats/initialState";
import messagesState from "./messages/initialState";

export default {
    auth: authState,
    chatsRequest: chatsState.request,
    chats: chatsState.default,
    messagesRequest: messagesState.request,
    messages: messagesState.default,
};
