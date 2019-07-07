import * as types from "../actions/ActionTypes";

const initialState = { apiClient: undefined };

export default function interfaceReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_APICLIENT:
      return Object.assign({}, state, {
        apiClient: action.apiClient
      });
    default:
      return state;
  }
}
