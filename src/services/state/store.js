import { createStore, applyMiddleware } from 'redux'
import  thunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import mainReducer from './mainReducer'

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

import initialState from "./initialStates"

export default createStore(mainReducer, initialState,
    composeWithDevTools(applyMiddleware(thunk))
)
