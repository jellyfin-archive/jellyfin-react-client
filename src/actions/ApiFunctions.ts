import ApiClient from "jellyfin-apiclient/dist/apiclient";
import jellyfinStore from "../utilities/storage/store";
import { ActionType } from "./ActionType";
import { getApiClient, setApiClient } from "../utilities/api-client";

export const connectToJellyfin = function (address: string) {
    setApiClient(new ApiClient(null, address, "Jellyfin WebNG", "0.0.1", "WebNG", "WebNG", ""));
};

//Dispatch Action Helper:
function loginSuccessfully(username: string, userId: string, token: string) {
    return {
        type: ActionType.LOGIN_SUCCESSFUL,
        username,
        userId,
        token
    };
}

export const loginToJellyfin = async function (username: string, password: string) {
    const auth = await getApiClient().authenticateUserByName(username, password);
    jellyfinStore.store.dispatch(loginSuccessfully(auth.User.Name, auth.User.Id, auth.AccessToken));
    await getApiClient().setAuthenticationInfo(auth.AccessToken, auth.User.Id);
};
