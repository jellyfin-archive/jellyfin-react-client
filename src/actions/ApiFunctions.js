import ApiClient from 'jellyfin-apiclient/dist/apiclient';
import jellyfinStore from '../utilities/storage/store';
import * as types from './ActionTypes';

export const connectToJellyfin = function (address) {
    let apiClient = new ApiClient(null, address, "Jellyfin WebNG", '0.0.1', 'WebNG', 'WebNG', '');
    jellyfinStore.store.dispatch({ type: types.UPDATE_APICLIENT, apiClient: apiClient });
}

export const loginToJellyfin = async function (username, password) {
    let apiClient = copyClientFromStore();
    let auth = await apiClient.authenticateUserByName(username, password);
    jellyfinStore.store.dispatch(loginSuccessfully(auth.User.Name, auth.User.Id, auth.AccessToken));
    apiClient.setAuthenticationInfo(auth.AccessToken, auth.User.Id);
    jellyfinStore.store.dispatch({ type: types.UPDATE_APICLIENT, apiClient: apiClient });
}

export const copyClientFromStore = function () {
    let apiClient = jellyfinStore.store.getState().jellyfinInterface.apiClient;
    return Object.assign(new ApiClient(null, "-", "Jellyfin WebNG", "0.0.1", "WebNG", "WebNG", ""), apiClient);
}

//Dispatch Action Helper:

function loginSuccessfully(username, userid, token) {
    return {
        type: types.LOGIN_SUCCESSFUL,
        username,
        userid,
        token
    }
}
