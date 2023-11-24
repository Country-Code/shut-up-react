import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from '../Actiontypes/userActionsTypes'
import { baseUrl } from '../../Shared';

import axios from 'axios'

export const register = (fullname, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST})
        const { data } = await axios.post(
            baseUrl + '/api/auth/register', 
            {
                'fullname': fullname,
                'email': email,
                'password': password,
            },
            {
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
        )
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST})
        const { data } = await axios.post(
            baseUrl + '/api/auth/login', 
            {
                'email': email,
                'password': password,
            },
            {
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
        )
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT
    })
    document.location.href = '/login'
}