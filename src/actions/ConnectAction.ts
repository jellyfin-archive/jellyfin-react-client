import * as types from "./ActionTypes";
import { connectToJellyfin } from "./ApiFunctions";
import jellyfinStore from "../utilities/storage/store";
import { ActionTypes } from "./ActionTypes";

export default function connectToServer(serverAddress: string, port: string) {
    return (dispatch: any) => {
        let plainServerAddress = serverAddress;
        serverAddress = normalizeAddress(serverAddress);
        serverAddress = serverAddress + ":" + port;
        connectToJellyfin(serverAddress);
        try {
            //TODO No any anywhere
            const apiClient: any = jellyfinStore.store.getState().jellyfinInterface.apiClient;
            if(apiClient) {
                apiClient.getPublicSystemInfo().then((result: any) => {
                    console.log("Connected");
                    console.log(result);
                    return dispatch(connectSuccessful(plainServerAddress, port));
                });
            } else {
                throw new Error("API Client is undefined");
            }
        } catch (err) {
            console.log("Unable to connect.");
            return dispatch(connectFailed(plainServerAddress, port));
        }
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

function connectSuccessful(address: string, port: string) {
    return {
        type: ActionTypes.CONNECT_SUCCESSFUL,
        address,
        port
    };
}

function connectFailed(address: string, port: string) {
    return {
        type: ActionTypes.CONNECT_FAILED,
        address,
        port
    };
}
