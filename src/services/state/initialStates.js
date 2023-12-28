import authState from "./auth/initialState";
import chatsState from "./chats/initialState";
import messagesState from "./messages/initialState";

export default {
    auth: authState,
    chatsRequest: chatsState,
    messages: messagesState,
};
