import { JellyfinAction } from "../Props";
import { ActionType } from "../actions/ActionType";

const initialState = { apiClient: undefined };

export default function interfaceReducer(state = initialState, action: JellyfinAction) {
    if (action.type === ActionType.UPDATE_APICLIENT) {
        return Object.assign({}, state, {
            apiClient: action.apiClient
        });
    } else {
        return state;
    }
}
