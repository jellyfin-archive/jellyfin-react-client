import ApiClient from 'jellyfin-apiclient/dist/apiclient';
import { getApiClient, setApiClient } from '../utilities/api-client';
import { connectSuccessful, connectFailed } from "../reducers/connectionStatus";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../utilities/storage/store";
import { Action } from "redux";

function replaceAll(originalString: string, strReplace: string, strWith: string): string {
    const reg = new RegExp(strReplace, "ig");
    return originalString.replace(reg, strWith);
}

function normalizeAddress(serverAddress: string): string {
    // attempt to correct bad input
    serverAddress = serverAddress.trim();

    if (serverAddress.toLowerCase().indexOf("http") !== 0) {
        serverAddress = `http://${serverAddress}`;
    }

    // Seeing failures in iOS when protocol isn't lowercase
    serverAddress = replaceAll(serverAddress, "Http:", "http:");
    serverAddress = replaceAll(serverAddress, "Https:", "https:");

    return serverAddress;
}

/**
 * Connect to Jellyfin given a server address. A request to a public endpoint is attempted
 * to verify connection.
 * 
 * @param serverAddress The server address to connect to
 * @returns true if connection success, false otherwise 
 */
export default function connectToServer(
    serverAddress: string
): ThunkAction<Promise<boolean>, RootState, null, Action<string>> {
    return async (dispatch) => {
        const normalizedAddress = normalizeAddress(serverAddress);
        setApiClient(new ApiClient(null, normalizedAddress || '-', "Jellyfin WebNG", "0.0.1", "WebNG", "WebNG", ""));

        try {
            await getApiClient().getPublicSystemInfo()
            dispatch(connectSuccessful({ serverAddress }));
            return true
        } catch (err) {
            dispatch(connectFailed({ serverAddress }));
            return false
        }
    };
}
