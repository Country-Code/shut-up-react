import apiTools from "../../utils/api";
import api from "./api";

export default () => {
    const authAxios = apiTools.getAxios("chats");

    return {
        addUser: async (chatId, userId) => {
            return await api.call(authAxios, "put", `/${chatId}/add-user`, {
                userId,
            });
        },
        createGroup: async (users, name) => {
            return await api.call(authAxios, "post", "/", {
                users,
                name,
            });
        },
        getAllChats: async () => {
            return await api.call(authAxios, "get", "/");
        },
        getChatById: async (chatId) => {
            return await api.call(authAxios, "get", `/${chatId}`);
        },
        getChatByUser: async (userId) => {
            return await api.call(authAxios, "get", `/user/${userId}`);
        },
        removeUser: async (chatId, userId) => {
            return await api.call(authAxios, "put", `/${chatId}/remove-user`, {
                userId,
            });
        },
        renameChat: async (chatId, name) => {
            return await api.call(authAxios, "put", `/${chatId}/rename`, {
                name,
            });
        },
    };
};
