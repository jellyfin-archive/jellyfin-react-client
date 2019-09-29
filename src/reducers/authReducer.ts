import { Action } from "../Props";
import { ActionTypes } from "../actions/ActionTypes";

const initialState = {
    username: "",
    userid: "",
    token: "",
    loginStatus: false
};

export default function authReducer(state = initialState, action: Action) {
    if (action.type === ActionTypes.LOGIN_SUCCESSFUL) {
        return Object.assign({}, state, {
            username: action.username,
            userid: action.userid,
            token: action.token,
            loginStatus: true
        });
    } else {
        return state;
    }
}
