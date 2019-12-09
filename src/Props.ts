// Contains the definition for the props used in Jellyfin
import { ActionType } from "./actions/ActionType";
import { AnyAction, Dispatch } from "redux";
import ApiClient from 'jellyfin-apiclient/dist/apiclient';

export interface JellyfinAction {
    type: ActionType;
    username: string;
    userId: string;
    token: string;
    loginStatus: boolean;
    address: string;
    port: string;
    apiClient: ApiClient;
}

export interface Storage {
    jellyfinInterface: {
        apiClient: ApiClient;
    };
    authCredentials: {
        userId: string;
        username: string;
    };
}
export interface ConnectionStatus {
    serverAddress: string;
    connectStatus: boolean;
}

export interface JellyfinProps {
    connectionStatus: ConnectionStatus;
    connectAction: (state: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
    storage: Storage;
    dispatch: (dispatch: Dispatch<AnyAction>) => void;
}
