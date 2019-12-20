import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist";
import { Persistor } from "redux-persist/es/types";
import { Store } from 'redux';
import normalStorage from "./normalStorage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import AuthReducer from "../../reducers/authReducer";
import sensitiveStorage from "./sensitiveStorage";
import ConnectReducer from "../../reducers/connectReducer";

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

const rootReducer = combineReducers({
    authCredentials: persistReducer(authPersistConfig, AuthReducer),
    connectionStatus: persistReducer(connectPersistConfig, ConnectReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const createJellyfinStore = (): { store: Store; persistor: Persistor } => {
    const store = configureStore({
        reducer: persistedReducer
    })
    const persistor = persistStore(store);
    return { store, persistor };
};

const jellyfinStore = createJellyfinStore();

export default jellyfinStore;
