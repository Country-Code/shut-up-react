import * as actionTypes from "./actionTypes";
import io from "socket.io-client";
import { baseUrl } from "../../../Shared";

export default (state = {}, action) => {
    // console.log("socketReducer state :", state);
    // console.log("socketReducer action :", action);
    let newState = { ...state };
    let user, socket, authData;
    if (Object.keys(newState).includes("isConnected") && !newState?.isConnected && !newState?.socket) {
        socket = io(baseUrl);
        authData = localStorage.getItem("auth-data")
            ? JSON.parse(localStorage.getItem("auth-data"))
            : null;
        user = authData?.user;
        socket.emit("init_connection", user);
        socket.on("connected", () => {
            console.log("socketReducer.connected");
        });
        newState.socket = socket;
        newState.idSocket = Math.floor(Math.random() * 100);
        newState.isConnected = true;
    }

    switch (action.type) {
        case actionTypes.SOCKET_EMIT_NEW_MESSAGE:
            newState.socket.emit("new_message", action.payload.message);
            break;
        default:
            break;
    }
    return newState;
};
