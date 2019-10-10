import { connectToJellyfin } from "./ApiFunctions";
import jellyfinStore from "../utilities/storage/store";
import { ActionType } from "./ActionType";

export default function connectToServer(serverAddress: string) {
    return (dispatch: any) => {
        let plainServerAddress = serverAddress;
        serverAddress = normalizeAddress(serverAddress);
        connectToJellyfin(serverAddress);
        try {
            //TODO No any anywhere
            const apiClient: any = jellyfinStore.store.getState().jellyfinInterface.apiClient;
            if(apiClient) {
                apiClient.getPublicSystemInfo().then((result: any) => {
                    console.log("Connected");
                    console.log(result);
                    return dispatch(connectSuccessful(plainServerAddress));
                });
            } else {
                throw new Error("API Client is undefined");
            }
        } catch (err) {
            console.log("Unable to connect.");
            return dispatch(connectFailed(plainServerAddress));
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

function connectSuccessful(address: string) {
    return {
        type: ActionType.CONNECT_SUCCESSFUL,
        address,
    };
}

function connectFailed(address: string) {
    return {
        type: ActionType.CONNECT_FAILED,
        address,
    };
}
