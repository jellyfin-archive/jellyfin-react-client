import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    serverAddress: "",
    connectStatus: false
};

interface ConnectData {
    serverAddress: string;
}

const { reducer, actions } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        connectSuccessful: (state, action: PayloadAction<ConnectData>) => {
            return {
                serverAddress: action.payload.serverAddress,
                connectStatus: true
            }
        },
        connectFailed: (state, action: PayloadAction<ConnectData>) => {
            return {
                serverAddress: action.payload.serverAddress,
                connectStatus: false
            }
        }
    }
})

const { connectSuccessful, connectFailed } = actions
export type ConnectState = ReturnType<typeof reducer>

export {
    reducer as connectReducer,
    connectSuccessful,
    connectFailed
}
