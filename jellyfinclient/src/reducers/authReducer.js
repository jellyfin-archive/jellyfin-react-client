import * as types from "../actions/ActionTypes";

const initialState = { username: '', password: '' }

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESSFUL:
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                loginStatus: true
            });
        case types.LOGIN_FAILED:
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                loginStatus: false
            });
        default:
            return state;
    }
}
