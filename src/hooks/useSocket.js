import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as socketActionTypes from "../services/state/socket/actionTypes";
import { defaultListeners } from "../services/web-socket/listeners";

const useSocket = () => {
    // console.log("useSocket Hook executed");
    const socketState = useSelector((state) => state.socket);
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("useSocket.useEffect is running :");
        // console.log(
        //     "useSocket.useEffect socketState.socket",
        //     socketState.socket
        // );
        // console.log(
        //     "socketState.eventListeners?.default :",
        //     socketState.eventListeners?.default
        // );
        if (socketState.socket && !socketState.eventListeners?.default) {
            // console.log("useSocket.useEffect : defaultListeners setup is in progress");
            Object.keys(defaultListeners).forEach((event) => {
                // console.log(
                //     "useSocket.useEffect : defaultListeners setup is in progress for :",
                //     event
                // );
                dispatch({
                    type: socketActionTypes.SOCKET_ADD_LISTENER,
                    payload: {
                        event,
                        callback: defaultListeners[event](dispatch),
                    },
                });
            });
            dispatch({
                type: socketActionTypes.INIT_CONNECTION,
            });
        }
    }, [socketState.socket]);
    return {
        on: (event, callback) => {
            dispatch({
                type: socketActionTypes.SOCKET_ADD_LISTENER,
                payload: { event, callback },
            });
        },
        emit: (event, data) => {
            dispatch({
                type: socketActionTypes.SOCKET_EMIT_EVENT,
                payload: { event, data },
            });
        },
    };
};

export default useSocket;
