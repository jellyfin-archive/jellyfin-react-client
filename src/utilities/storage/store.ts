import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PersistConfig, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux'
import normalStorage from "./normalStorage";
import sensitiveStorage from "./sensitiveStorage"
import hardSet from "redux-persist/es/stateReconciler/hardSet";

import { authReducer, AuthState } from "../../reducers/authCredentials";
import { connectReducer, ConnectionStatusState } from "../../reducers/connectionStatus";
import { initApiClient } from "../../actions/ApiFunctions";

const rootPersistConfig = {
    key: "root",
    storage: normalStorage
};

const authPersistConfig: PersistConfig<AuthState> = {
    key: "auth",
    storage: sensitiveStorage,
    stateReconciler: hardSet,
    blacklist: ["loginStatus"]
};

const connectPersistConfig: PersistConfig<ConnectionStatusState> = {
    key: "connectionStatus",
    storage: sensitiveStorage,
    stateReconciler: hardSet,
    blacklist: ["connectStatus", "apiInitialized"]
};

const rootReducer = combineReducers({
    authCredentials: persistReducer(authPersistConfig, authReducer),
    connectionStatus: persistReducer(connectPersistConfig, connectReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            // Ignore actions from redux-persist
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})
const persistor = persistStore(store, null, () => {
    store.dispatch(initApiClient())
});

export type RootState = ReturnType<typeof rootReducer>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export { store, persistor };
