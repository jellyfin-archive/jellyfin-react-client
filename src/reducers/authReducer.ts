import { JellyfinAction } from "../Props";
import { ActionType } from "../actions/ActionType";

export interface AuthReducerState {
    username: string,
    userId: string,
    token: string,
    loginStatus: boolean
}

const initialState: AuthReducerState = {
    username: "",
    userId: "",
    token: "",
    loginStatus: false
};

export default function authReducer(state = initialState, action: JellyfinAction) {
    if (action.type === ActionType.LOGIN_SUCCESSFUL) {
        return Object.assign({}, state, {
            username: action.username,
            userId: action.userId,
            token: action.token,
            loginStatus: true
        });
    } else {
        return state;
    }
}
