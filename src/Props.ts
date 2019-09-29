// Contains the definition for the props used in Jellyfin
import { ActionType } from "./actions/ActionType";

export interface JellyfinAction {
    type: ActionType,
    username: string,
    userid: string,
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
        userid: string,
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
    connectAction: any,
    storage: Storage
}
