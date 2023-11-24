import { createStore, combineReducers, applyMiddleware } from 'redux'
import  thunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import userReducers from './reducers/userReducers'

// new reducers must added here
const reducer = combineReducers({...userReducers})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin : {userInfo : userInfoFromStorage},
}

// allow using async call
const middleware = [thunk]

const store = createStore(reducer, initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    )

export default store