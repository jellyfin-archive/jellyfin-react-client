import { ActionType } from "../actions/ActionType";
import { JellyfinAction } from "../Props";

const initialState = {
    serverAddress: "",
    connectStatus: false
};

export default function connectReducer(state = initialState, action: JellyfinAction) {
    switch (action.type) {
        case ActionType.CONNECT_SUCCESSFUL:
            return Object.assign({}, state, {
                serverAddress: action.address,
                connectStatus: true
            });
        case ActionType.CONNECT_FAILED:
            return Object.assign({}, state, {
                serverAddress: action.address,
                connectStatus: false
            });
        default:
            return state;
    }
}
