import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import chatsReducer from './chats/chatsReducer'
import messagesReducer from './messages/messagesReducer'

export default combineReducers({
    auth: authReducer,
    chats: chatsReducer,
    messages: messagesReducer,
})
