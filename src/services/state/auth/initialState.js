const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

export default {
    data: {
        user: userInfoFromStorage
    },
};