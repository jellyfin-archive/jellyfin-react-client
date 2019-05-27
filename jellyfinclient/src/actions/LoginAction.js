import * as types from "./ActionTypes";

export default function LoginAction(serverAddress, username, password) {
    return (dispatch) => {
        console.log("Logging in with:", serverAddress, username, password);
        return (dispatch(loginSuccessfully(username, password)));
    }
}

function loginSuccessfully(username, password) {
    return {
        type: types.LOGIN_SUCCESSFUL,
        username,
        password
    }
}

function loginFailed(username, password) {
    return {
        type: types.LOGIN_FAILED,
        username,
        password
    }
}
