import apiTools from "../../utils/api";
import api from "./api";

export default () => {
    const searchAxios = apiTools.getAxios("search");

    return {
        searchUsers: async (search_query) => {
            return await api.call(searchAxios, "post", "/users", {
                search_query,
            });
        },
    };
};
