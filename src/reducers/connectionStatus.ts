import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ConnectionStatusState {
    serverAddress: null | string;
    connectStatus: boolean;
    apiInitialized: boolean;
}

const initialState: ConnectionStatusState = {
    serverAddress: null,
    connectStatus: false,
    apiInitialized: false
};

interface ConnectData {
    serverAddress: string;
}

const { reducer, actions } = createSlice({
    name: 'connectionStatus',
    initialState,
    reducers: {
        apiInitialized: (state) => {
            state.apiInitialized = true
        },
        connectSuccessful: (state, action: PayloadAction<ConnectData>) => {
            state.serverAddress = action.payload.serverAddress,
            state.connectStatus = true
        },
        connectFailed: (state, action: PayloadAction<ConnectData>) => {
            state.serverAddress = action.payload.serverAddress,
            state.connectStatus = false
        },
    }
})

const { apiInitialized, connectSuccessful, connectFailed } = actions

export {
    reducer as connectReducer,
    apiInitialized,
    connectSuccessful,
    connectFailed,
}
