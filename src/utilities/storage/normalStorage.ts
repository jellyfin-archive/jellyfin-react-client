/* eslint-disable @typescript-eslint/no-var-requires */

import isElectron from "is-electron";
import { Storage } from "redux-persist/es/types"

let storage: Storage;

// The only time IS_ELECTRON will be 1 is for the electron build.
if (isElectron()) {
    const createElectronStore = require("electron-store-webpack-wrapper").default;
    const createElectronStorage = require("redux-persist-electron-storage");
    const electronStore = createElectronStore({
        // your electron-store options here
    });
    storage = createElectronStorage({
        electronStore
    });
} else {
    storage = require("redux-persist/lib/storage").default;
}
export default storage;
