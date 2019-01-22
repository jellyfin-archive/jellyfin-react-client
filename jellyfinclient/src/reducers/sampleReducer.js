/**
 * Created by amoghbanta on 04/02/17.
 */
import * as types from "../actions/ActionTypes";

const initialState = {message:'', somethingHappeningStatus:''};

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {

        case types.SOMETHING_HAPPENED_SUCCESSFULLY:
            return {
                ...state,...action.data, somethingHappeningStatus:"successful"
            };
        case types.SOMETHING_FAILED:
            return {
                ...state,...action.data, somethingHappeningStatus:"failed"
            };
        default:
            return state;
    }
}