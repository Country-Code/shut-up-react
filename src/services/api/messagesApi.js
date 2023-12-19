import apiTools from "../../utils/api";
import api from "./api";

export default () => {
    const messagesAxios = apiTools.getAxios("messages");

    return {
        sendMessage: async (chatId, content) => {
            return await api.call(messagesAxios, "post", "/send", {
                chatId,
                content,
            });
        },
        getChatMessages: async (chatId) => {
            return await api.call(messagesAxios, "get", `chat/${chatId}`);
        },
        readMessage: async (messageId) => {
            return await api.call(messagesAxios, "put", `/${messageId}/read`);
        },
    };
};
