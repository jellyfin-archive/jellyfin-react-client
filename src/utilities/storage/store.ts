import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { Persistor } from "redux-persist/es/types";
import { Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import normalStorage from "./normalStorage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import AuthReducer from "../../reducers/authReducer";
import sensitiveStorage from "./sensitiveStorage";
import ConnectReducer from "../../reducers/connectReducer";
import InterfaceReducer from "../../reducers/interfaceReducer";

const rootPersistConfig = {
    key: "root",
    storage: normalStorage
};

const authPersistConfig = {
    key: "authCredentials",
    storage: sensitiveStorage,
    stateReconciler: hardSet,
    blacklist: ["loginStatus"]
};

const connectPersistConfig = {
    key: "connectionStatus",
    storage: sensitiveStorage,
    stateReconciler: hardSet,
    blacklist: ["connectStatus"]
};

const interfacePersistConfig = {
    key: "jellyfinInterface",
    storage: sensitiveStorage,
    stateReconciler: hardSet,
    blacklist: ["apiClient"]
};

const rootReducer = combineReducers({
    authCredentials: persistReducer(authPersistConfig, AuthReducer),
    connectionStatus: persistReducer(connectPersistConfig, ConnectReducer),
    jellyfinInterface: persistReducer(interfacePersistConfig, InterfaceReducer)
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const createJellyfinStore = (): { store: Store; persistor: Persistor } => {
    const store = createStore(persistedReducer, {}, composeWithDevTools(compose(applyMiddleware(thunk))));
    const persistor = persistStore(store);
    return { store, persistor };
};

const jellyfinStore = createJellyfinStore();

export default jellyfinStore;
