// Contains the definition for the props used in Jellyfin
import { ActionType } from "./actions/ActionType";
import { AnyAction, Dispatch } from "redux";

export interface JellyfinAction {
    type: ActionType,
    username: string,
    userId: string,
    token: string,
    loginStatus: boolean,
    address: string,
    port: string,
    apiClient: any
}

export interface Storage {
    jellyfinInterface: {
        apiClient: any
    },
    authCredentials: {
        userId: string,
        username: string
    }
}
export interface ConnectionStatus {
    serverAddress: string,
    serverPort: string,
    connectStatus: boolean
}

export interface JellyfinProps {
    connectionStatus: ConnectionStatus,
    connectAction: (state: any) => void,
    storage: Storage,
    dispatch: (dispatch: Dispatch<AnyAction>) => void,
}
