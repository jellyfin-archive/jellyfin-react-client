import * as types from "./ActionTypes";

export default function LoginAction(serverAddress, username, password) {
    return (dispatch) => {
        console.log("Logging in with:", serverAddress, username, password)
        dispatch(loginSuccessfully({serverAddress: serverAddress, username: username, password: password}))       
    }
}

function loginSuccessfully(payload) {
    return {
        type: types.LOGIN_SUCCESSFUL,
        data: payload
    }
}

function loginFailed(payload) {
    return {
        type: types.LOGIN_FAILED,
        data: payload
    }
}