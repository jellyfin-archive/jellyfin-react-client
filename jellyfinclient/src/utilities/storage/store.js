import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../../reducers/rootReducer";

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
export default store;