import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk";
import normalStorage from './normalStorage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import AuthReducer from "../../reducers/authReducer";
import SampleReducer from "../../reducers/sampleReducer";
import sensitiveStorage from './sensitiveStorage'
import ConnectReducer from "../../reducers/connectReducer";

const rootPersistConfig = {
    key: 'root',
    storage: normalStorage,
    blacklist: ['auth']
}


//TODO add bulk storage (for sync and download)

const authPersistConfig = {
    key: 'auth',
    storage: sensitiveStorage,
    stateReconciler: hardSet,
}

const connectPersistConfig = {
    key: 'connect',
    storage: sensitiveStorage,
    stateReconciler: hardSet,
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, AuthReducer),
    connect: persistReducer(connectPersistConfig, ConnectReducer),
    sample: SampleReducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    let store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(thunk)))
    let persistor = persistStore(store)
    return { store, persistor }
}