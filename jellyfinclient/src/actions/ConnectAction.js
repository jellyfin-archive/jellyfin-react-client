import * as types from "./ActionTypes";
import ApiClient from "jellyfin-apiclient/dist/apiclient";

export default function connectToServer(serverAddress, port) {
    return (dispatch) => {
        let plainServerAddress = serverAddress;
        serverAddress = normalizeAddress(serverAddress);
        serverAddress = serverAddress + ":" + port;
        var client = new ApiClient(null, serverAddress, "Jellyfin WebNG", '0.0.1', 'WebNG', 'WebNG', '');
        try {
            client.getPublicSystemInfo().then(result => {
                console.log("Connected");
                console.log(result);
                return (dispatch(connectSuccessful(plainServerAddress, port)));
            })
        }
        catch (err) {
            console.log("Unable to connect.");
            return dispatch(connectFailed(plainServerAddress, port));
        }
    };
}

function replaceAll(originalString, strReplace, strWith) {
    const reg = new RegExp(strReplace, 'ig');
    return originalString.replace(reg, strWith);
}

function normalizeAddress(serverAddress) {

    // attempt to correct bad input
    serverAddress = serverAddress.trim();

    if (serverAddress.toLowerCase().indexOf('http') !== 0) {
        serverAddress = `http://${serverAddress}`;
    }

    // Seeing failures in iOS when protocol isn't lowercase
    serverAddress = replaceAll(serverAddress, 'Http:', 'http:');
    serverAddress = replaceAll(serverAddress, 'Https:', 'https:');

    return serverAddress;
}

function connectSuccessful(address, port) {
    return {
        type: types.CONNECT_SUCCESSFUL,
        address,
        port
    };
}

function connectFailed(address, port) {
    return {
        type: types.CONNECT_FAILED,
        address,
        port
    };
}
