import apiTools from "../../utils/api";


export default () => {
    const authAxios = apiTools.getAxios("auth");

    return {
        register: async (fullname, email, password) => {
            const response = await authAxios.post("/register", {
                fullname,
                email,
                password,
            });
            return response.data;
        },

        login: async (email, password) => {
            const response = await authAxios.post("/login", {
                email,
                password,
            });
            return response.data;
        },

        reset: async (newPassword, resetPasswordToken) => {
            console.log(`authApi->reset(${newPassword}, ${resetPasswordToken})`)
            const response = await authAxios.post("/reset-password", {
                newPassword,
                resetPasswordToken
            });
            return response.data;
        },
    };
};
