// Contains the definition for the props used in Jellyfin
export interface Storage {
    jellyfinInterface : {
        apiClient: any
    },
    authCredentials: any
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
