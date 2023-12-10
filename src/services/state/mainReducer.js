import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import chatsReducer from './chats/chatsReducer'

export default combineReducers({
    auth: authReducer,
    chats: chatsReducer,
})
