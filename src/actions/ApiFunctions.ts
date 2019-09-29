import ApiClient from "jellyfin-apiclient/dist/apiclient";
import jellyfinStore from "../utilities/storage/store";
import { ActionType } from "./ActionType";

export const connectToJellyfin = function(address: string) {
    const apiClient = new ApiClient(null, address, "Jellyfin WebNG", "0.0.1", "WebNG", "WebNG", "");
    jellyfinStore.store.dispatch({
        type: ActionType.UPDATE_APICLIENT,
        apiClient: apiClient
    });
};

export const loginToJellyfin = async function(username: string, password: string) {
    const apiClient = copyClientFromStore();
    const auth = await apiClient.authenticateUserByName(username, password);
    jellyfinStore.store.dispatch(loginSuccessfully(auth.User.Name, auth.User.Id, auth.AccessToken));
    apiClient.setAuthenticationInfo(auth.AccessToken, auth.User.Id);
    jellyfinStore.store.dispatch({
        type: ActionType.UPDATE_APICLIENT,
        apiClient: apiClient
    });
};

export const copyClientFromStore = function() {
    const apiClient = jellyfinStore.store.getState().jellyfinInterface.apiClient;
    return Object.assign(new ApiClient(null, "-", "Jellyfin WebNG", "0.0.1", "WebNG", "WebNG", ""), apiClient);
};

//Dispatch Action Helper:
function loginSuccessfully(username: string, userid: string, token: string) {
    return {
        type: ActionType.LOGIN_SUCCESSFUL,
        username,
        userid,
        token
    };
}
