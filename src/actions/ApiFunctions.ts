import ApiClient from "jellyfin-apiclient/dist/apiclient";
import { RootState } from "../utilities/storage/store";
import { getApiClient, setApiClient } from "../utilities/api-client";
import { loginSuccessful } from "../reducers/authReducer";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

/**
 * Create an API client for a Jellyfin backend.
 * @param address - Address of the Jellyfin backend.
 */
export const connectToJellyfin = function (address: string): void {
    setApiClient(new ApiClient(null, address, "Jellyfin WebNG", "0.0.1", "WebNG", "WebNG", ""));
};

/**
 * Initialize the API client when the application loads, intended to be used with the persisted
 * server and authentication data in Redux.
 */
export const initApiClient = (
    serverAddress: string,
    token: string,
    userId: string
): void => {
    connectToJellyfin(serverAddress)
    if (token && userId) {
        getApiClient().setAuthenticationInfo(token, userId);
    }
}

/**
 * Create a thunk for logging in to Jellyfin with a username and password. On success, the access
 * token is retrieved and set in the client API, then a loginSuccessful action is dispatched.
 */
export default function loginToJellyfin(
    username: string,
    password: string
): ThunkAction<void, RootState, null, Action<string>> {
    return async dispatch => {
        const auth = await getApiClient().authenticateUserByName(username, password);
        getApiClient().setAuthenticationInfo(auth.AccessToken, auth.User.Id);
        dispatch(
            loginSuccessful({
                username: auth.User.Name,
                userId: auth.User.Id,
                token: auth.AccessToken
            })
        );
   }
}
