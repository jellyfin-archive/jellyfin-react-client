import { RootState } from "../utilities/storage/store";
import { getApiClient } from "../utilities/api-client";
import { loginSuccessful } from "../reducers/authCredentials";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import connectToServer from './ConnectAction';
import { apiInitialized } from "../reducers/connectionStatus";

/**
 * Initialize the API client when the application loads, intended to be called when the store is re-hydrated.
 */
export function initApiClient(): ThunkAction<void, RootState, null, Action<string>> {
    return async (dispatch, getState) => {
        const {
            authCredentials: { token, username, userId },
            connectionStatus: { serverAddress }
        } = getState()

        if (serverAddress !== null) {
            const connected = await dispatch(connectToServer(serverAddress))

            // Authenticate with the stored token if we can
            if (connected && token && userId) {
                getApiClient().setAuthenticationInfo(token, userId);
                try {
                    await getApiClient().getResumableItems(userId)
                    dispatch(loginSuccessful({ username, userId, token }))
                } catch {
                    getApiClient().setAuthenticationInfo(undefined, undefined)
                }
            }
        }

        dispatch(apiInitialized())
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
