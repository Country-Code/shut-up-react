const authData = localStorage.getItem("auth-data")
    ? JSON.parse(localStorage.getItem("auth-data"))
    : null;

export default {
    data: {
        user: authData?.user
    },
};
