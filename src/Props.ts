// Contains the definition for the props used in Jellyfin
export interface Action {
    type: ActionTypes,
    username: string,
    userid: string,
    token: string,
    loginStatus: boolean
}
export interface Storage {
    jellyfinInterface: {
        apiClient: any
    },
    authCredentials: {
        userid: string
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
