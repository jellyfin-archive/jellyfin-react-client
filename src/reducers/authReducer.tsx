import * as types from "../actions/ActionTypes";

const initialState = {
    username: "",
    userid: "",
    token: "",
    loginStatus: false
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESSFUL:
            return Object.assign({}, state, {
                username: action.username,
                userid: action.userid,
                token: action.token,
                loginStatus: true
            });
        default:
            return state;
    }
}
