import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import chatsReducer from './chats/chatsReducer'
import messagesReducer from './messages/messagesReducer'
import socketReducer from './socket/socketReducer'

export default combineReducers({
    auth: authReducer,
    chats: chatsReducer.default,
    chatsRequest: chatsReducer.request,
    messages: messagesReducer.default,
    messagesRequest: messagesReducer.request,
    socket: socketReducer,
});
