import * as types from './ActionTypes';
import JFInterface from './ApiClient';

export default function LoginAction(username, password) {
    return async (dispatch) => {
        try {
            let auth = await JFInterface.apiClient.authenticateUserByName(username, password);
            JFInterface.apiClient.setAuthenticationInfo(auth.AccessToken, auth.User.Id)
            return (dispatch(loginSuccessfully(auth.User.Name, auth.User.Id, auth.AccessToken)));
        } catch (e) {
            console.error("Could not login. Check credentials and network connection.")
        }
    }
}

function loginSuccessfully(username, userid, token) {
    return {
        type: types.LOGIN_SUCCESSFUL,
        username,
        userid,
        token
    }
}
