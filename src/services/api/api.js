import authApi from "./authApi";
import chatApi from "./chatApi";

const apiErrorCodes = {
    "AUTH_REGISTER_FIELDS_MISSED": "Please fill all required fields!",
    "AUTH_REGISTER_FIELDS_INVALID": "The given information are not valid!",
    "AUTH_REGISTER_USER_IEXISTS": "The email given is already used!",
    "AUTH_REGISTER_USER_CREATE": "Error while creating your account. please try again",
    "AUTH_LOGIN_CREDENTIALS": "Your credentials are not valid!",
    "AUTH_RESETPWREQ_EMAIL": "There is no user with the given email!",
    "AUTH_RESETPWACT_TOKEN_INVALID": "This link is not valid. please try to click again on the button in the mail we sent you!",
    "AUTH_RESETPWACT_TOKEN_EXPIRED": "This link is expired. please try to resend a new reset password mail!",
    "AUTH_RESETPWACT_PASSWORD": "The new password is required!",
    "AUTH_MIDLLEWARE_TOKEN_MISSED": "Access denied. Your are not authenticated!",
    "AUTH_MIDLLEWARE_ROLES_ONEROLE": "Access denied. Your don't have the required rights!",
    "AUTH_MIDLLEWARE_ROLES_ALLROLES": "Access denied. Your don't have the required rights!",
    "PROFILE_USER_NOTFOUND": "Access denied. There is a problem with your account. try again please!",
    "PROFILE_USER_TIMEOUT": "Access denied. There is a problem with your account. try again please!",
};

const getErrorMessageByCode = (code) => {
    return apiErrorCodes[code] ?? "Unexpected internal error occured. Please try again later!"
}

export default {
    auth: authApi,
    chats: chatApi,
    dispatchError: (dispatch, type, error) => {
        let err = error?.response?.data ?? error;
        const errorCode = err.code;
        let errorMessage;
        if (errorCode) {
            errorMessage = getErrorMessageByCode(errorCode);
        } else {
            errorMessage = err.message;
        }
        dispatch({
            type,
            payload: errorMessage,
        });
    },
    call: async (ressourceApi, method, args) => {
        if(!args) args = [];
        // console.log(`API CALL params : ${method}(${args.join(', ')})`)
        const data = await ressourceApi[method](...args);
        // console.log(`API CALL data : `, data)
        if (data.token) {
            localStorage.setItem("token", data.token);
        }
        return data;
    },
}
