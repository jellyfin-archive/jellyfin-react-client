import { JellyfinAction } from "../Props";
import { ActionType } from "../actions/ActionType";

export interface InterfaceReducerState {
    apiClient: any
}

const initialState = { apiClient: undefined };

export default function interfaceReducer(state = initialState, action: JellyfinAction): InterfaceReducerState {
    if (action.type === ActionType.UPDATE_APICLIENT) {
        return Object.assign({}, state, {
            apiClient: action.apiClient
        });
    } else {
        return state;
    }
}
