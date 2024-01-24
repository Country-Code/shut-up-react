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
            socket.emit("init_connection", newState.user);
            socket.on("connected", () => {
                console.log("socketReducer.connected");
            });
            console.log("socketReducer.connection with data: ", newState.user);
        }
    }

    switch (action.type) {
        case actionTypes.SOCKET_EMIT_NEW_MESSAGE:
            newState.socket.emit("new_message", action.payload.message);
            break;
        default:
            break;
    }
    // console.log("socketReducer " + "#".repeat(20));
    return newState;
};
