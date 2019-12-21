import { connectToJellyfin } from "./ApiFunctions";
import ApiClient from 'jellyfin-apiclient/dist/apiclient';
import { getApiClient } from '../utilities/api-client';
import { connectSuccessful, connectFailed } from "../reducers/connectReducer";
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

export default function connectToServer(
    serverAddress: string
): ThunkAction<void, RootState, null, Action<string>> {
    return async (dispatch): Promise<void>  => {
        const plainServerAddress = serverAddress;
        serverAddress = normalizeAddress(serverAddress);
        connectToJellyfin(serverAddress);
        try {
            const apiClient: ApiClient = getApiClient()
            await apiClient.getPublicSystemInfo()
            dispatch(connectSuccessful({ serverAddress: plainServerAddress }));
        } catch (err) {
            dispatch(connectFailed({ serverAddress: plainServerAddress }));
        }
    };
}
