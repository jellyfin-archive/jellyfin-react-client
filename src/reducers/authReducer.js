/**
 * Created by amoghbanta on 04/02/17.
 */
import * as types from "../actions/ActionTypes";

const initialState = {serverAddress:'http://localhost:8096/'}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESSFUL:
            return {
                ...state,...action.data, loginStatus:true
            };
        case types.LOGIN_FAILED:
            return {
                ...state,...action.data, loginStatus:false
            };
        default:
            return state;
    }
}