import * as actionsType from "./actionTypes";
import api from "../../api/api";

export default (searchApi) => {
    return {
        searchUsers: (search_query) => async (dispatch) => {
            try {
                dispatch({ type: actionsType.SEARCH_SEARCH_USERS_REQUEST });
                const data = await searchApi.searchUsers(search_query);
                dispatch({
                    type: actionsType.SEARCH_SEARCH_USERS_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                api.dispatchError(
                    dispatch,
                    actionsType.SEARCH_SEARCH_USERS_FAIL,
                    error,
                );
            }
        },
    };
};
