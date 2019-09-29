import { JellyfinAction } from "../Props";
import { ActionType } from "../actions/ActionType";

const initialState = {
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
