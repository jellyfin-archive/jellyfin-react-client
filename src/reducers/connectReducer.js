import * as types from "../actions/ActionTypes";

const initialState = {
  serverAddress: "",
  serverPort: "",
  connectStatus: false
};

export default function connectReducer(state = initialState, action) {
  switch (action.type) {
    case types.CONNECT_SUCCESSFUL:
      return Object.assign({}, state, {
        serverAddress: action.address,
        serverPort: action.port,
        connectStatus: true
      });
    case types.CONNECT_FAILED:
      return Object.assign({}, state, {
        serverAddress: action.address,
        serverPort: action.port,
        connectStatus: false
      });
    default:
      return state;
  }
}
