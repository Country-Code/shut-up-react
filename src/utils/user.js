const getUserData = () => {
    let userData = localStorage.getItem('auth-data');
    if (userData) userData = JSON.parse(userData);
    return userData["user"];
};

export default {
    getEmail: () => {
        let userData = getUserData();
        console.log("user.getEmail : userData : ", userData)
        return userData["email"] ?? ""
    },
}