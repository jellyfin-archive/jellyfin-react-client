import { ActionType } from "../actions/ActionType";
import { JellyfinAction } from "../Props";

export interface ConnectReducerState {
    serverAddress: string,
    serverPort: string,
    connectStatus: boolean
}

const initialState = {
    serverAddress: "",
    serverPort: "",
    connectStatus: false
};

export default function connectReducer(state = initialState, action: JellyfinAction): ConnectReducerState {
    switch (action.type) {
        case ActionType.CONNECT_SUCCESSFUL:
            return Object.assign({}, state, {
                serverAddress: action.address,
                serverPort: action.port,
                connectStatus: true
            });
        case ActionType.CONNECT_FAILED:
            return Object.assign({}, state, {
                serverAddress: action.address,
                serverPort: action.port,
                connectStatus: false
            });
        default:
            return state;
    }
}
