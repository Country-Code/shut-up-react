import * as actionsType from "./actionTypes";

export default {
    connect: () => (dispatch) => {
        // just to make sure that socketReducer will be called.
        dispatch({
            type: actionsType.SOCKET_CONNECT,
        });
    },
};
