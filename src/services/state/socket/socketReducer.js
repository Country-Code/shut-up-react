import * as actionTypes from "./actionTypes";
import io from "socket.io-client";
import { baseUrl } from "../../../Shared";

export default (state = {}, action) => {
    // console.log("socketReducer state :", state);
    // console.log("socketReducer action :", action);
    let newState = { ...state };
    if (newState.isInitialStateOk) {
        if (!newState?.user && localStorage.getItem("auth-data")) {
            console.log("socketReducer.setUser in progress");
            let authData = JSON.parse(localStorage.getItem("auth-data"));
            newState.user = authData?.user;
        }
        if (newState?.user && !newState?.socket) {
            console.log("socketReducer.setSocket in progress");
            let socket = io(baseUrl);
            newState.idSocket = Math.floor(Math.random() * 100);
            newState.socket = socket;
        }
    }

    switch (action.type) {
        case actionTypes.SOCKET_EMIT_EVENT:
            if (!newState.socket) {
                // no socket connection yet
                console.log("socketReducer.socket is not defined");
                throw new Error("socketReducer.socket is not defined");
            }
            newState.socket.emit(action.payload.event, action.payload.data);
            break;
        case actionTypes.SOCKET_ADD_LISTENER:
            if (!newState.socket) {
                // no socket connection yet
                console.log("socketReducer.socket is not defined");
                throw new Error("socketReducer.socket is not defined");
            }
            if (!newState.eventListeners) {
                // no eventListeners yet
                console.log("socketReducer.eventListeners is not defined");
                newState.eventListeners = {};
            }
            if (newState.eventListeners[action.payload.event]) {
                // eventListener already exists, which means, a callback is set. we do nothing.
                console.log(
                    "socketReducer.eventListeners already exists for :",
                    action.payload.event
                );
                break;
            } else {
                // eventListener does not exist, we set it up.
                console.log(
                    "socketReducer.eventListeners does not exist for :",
                    action.payload.event
                );
                newState.eventListeners[action.payload.event] = true;
                newState.socket.on(
                    action.payload.event,
                    action.payload.callback
                );
            }
            break;
        case actionTypes.SOCKET_SET_IS_CONNECTED:
            newState.isConnected = action.payload.isConnected;
            break;
        case actionTypes.INIT_CONNECTION:
            if (!newState.eventListeners.default) {
                newState.socket.emit("init_connection", newState.user);
                newState.eventListeners["default"] = true;
            }
            break;
        case actionTypes.SOCKET_EMIT_NEW_MESSAGE:
            newState.socket.emit("new_message", action.payload.message);
            break;
        default:
            break;
    }
    // console.log("socketReducer return ", newState);
    // console.log("socketReducer " + "#".repeat(20));
    return newState;
};
