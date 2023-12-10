import apiTools from "../../utils/api";


export default () => {
    const authAxios = apiTools.getAxios("chats");

    return {
        create: async (users, name) => {
            const response = await authAxios.post("/", {
                users,
                name
            });
            return response.data;
        },

        getAll: async () => {
            const response = await authAxios.get("/");
            return response.data;
        },
    };
};
