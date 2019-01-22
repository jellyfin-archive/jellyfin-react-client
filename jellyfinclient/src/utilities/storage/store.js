import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import AuthReducer from "../../reducers/authReducer";
import SampleReducer from "../../reducers/sampleReducer";
import sensitiveStorage from './sensitiveStorage'

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['auth']
}


const authPersistConfig = {
    key: 'auth',
    storage: sensitiveStorage,
    stateReconciler: hardSet,
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, AuthReducer),
    sample: SampleReducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    let store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(thunk)))
    let persistor = persistStore(store)
    return { store, persistor }
}