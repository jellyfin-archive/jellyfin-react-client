/**
 * Created by amoghbanta on 04/02/17.
 */
import * as types from "../actions/ActionTypes";

const initialState = {serverAddress:'http://localhost:8096/'}

export default function connectReducer(state = initialState, action) {
    switch (action.type) {
        case types.CONNECT_SUCCESSFUL:
            return {
                ...state,...action.data, connectStatus:true
            };
        case types.CONNECT_FAILED:
            return {
                ...state,...action.data, connectStatus:false
            };
        default:
            return state;
    }
}