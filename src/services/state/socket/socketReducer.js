import * as actionTypes from "./actionTypes";
import io from "socket.io-client";
import { baseUrl } from "../../../Shared";

export default (state = {}, action) => {
    // console.log("=".repeat(80));
    // console.warn("socketReducer action : " + action?.type);
    // console.log("socketReducer state :");
    // console.log(state);
    // console.log("socketReducer action.payload :");
    // console.log(action.payload);
    let newState = { ...state };
    if (newState.isInitialStateOk && !newState.socket) {
        // console.log(
        //     "socketReducer isInitialStateOk without socket. check for connect cnd."
        // );
        if (!newState?.user && localStorage.getItem("auth-data")) {
            // console.log("socketReducer.setUser in progress");
            let authData = JSON.parse(localStorage.getItem("auth-data"));
            newState.user = authData?.user;
        }
        if (newState?.user && !newState?.socket) {
            // console.log("socketReducer.setSocket in progress");
            let socket = io(baseUrl);
            newState.idSocket = Math.floor(Math.random() * 100);
            newState.socket = socket;
            // console.log("socketReducer.setSocket is done. socket :", socket);
        }
    }

    switch (action.type) {
        case actionTypes.SOCKET_EMIT_EVENT:
            if (!newState.socket) {
                // no socket connection yet
                // console.log("socketReducer.socket is not defined");
                throw new Error("socketReducer.socket is not defined");
            }
            newState.socket.emit(action.payload.event, action.payload.data);
            break;
        case actionTypes.SOCKET_ADD_LISTENER:
            if (!newState.socket) {
                // no socket connection yet
                // console.log("socketReducer.socket is not defined");
                throw new Error("socketReducer.socket is not defined");
            }
            if (!newState.eventListeners) {
                // no eventListeners yet
                // console.log("socketReducer.eventListeners is not defined");
                newState.eventListeners = {};
            }
            if (newState.eventListeners[action.payload.event]) {
                // eventListener already exists, which means, a callback is set. we do nothing.
                // console.log(
                //     "socketReducer.eventListeners already exists for :",
                //     action.payload.event
                // );
                break;
            } else {
                // eventListener does not exist, we set it up.
                // console.log(
                //     "socketReducer.eventListeners does not exist for :",
                //     action.payload.event
                // );
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
                // console.log("socketReducer.INIT_CONNECTION in progress");
                newState.socket.emit("init_connection", newState.user);
                newState.eventListeners["default"] = true;
                // console.log("socketReducer.INIT_CONNECTION is done.");
            }
            break;
        case actionTypes.SOCKET_EMIT_NEW_MESSAGE:
            newState.socket.emit("new_message", action.payload.message);
            break;
        default:
            break;
    }
    // console.log("socketReducer return ", newState);
    // console.log("socketReducer end." + "#".repeat(60));
    return newState;
};
