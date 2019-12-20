import { connectToJellyfin } from "./ApiFunctions";
import { ActionType } from "./ActionType";
import ApiClient from 'jellyfin-apiclient/dist/apiclient';
import { getApiClient } from '../utilities/api-client';

function connectSuccessful(address: string) {
    return {
        type: ActionType.CONNECT_SUCCESSFUL,
        address
    };
}

function connectFailed(address: string) {
    return {
        type: ActionType.CONNECT_FAILED,
        address
    };
}

function replaceAll(originalString: string, strReplace: string, strWith: string) {
    const reg = new RegExp(strReplace, "ig");
    return originalString.replace(reg, strWith);
}

function normalizeAddress(serverAddress: string) {
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

export default function connectToServer(serverAddress: string) {
    return async (dispatch: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        const plainServerAddress = serverAddress;
        serverAddress = normalizeAddress(serverAddress);
        connectToJellyfin(serverAddress);
        try {
            const apiClient: ApiClient = getApiClient()
            await apiClient.getPublicSystemInfo()
            return dispatch(connectSuccessful(plainServerAddress));
        } catch (err) {
            return dispatch(connectFailed(plainServerAddress));
        }
    };
}
