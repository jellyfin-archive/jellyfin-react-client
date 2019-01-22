import isElectron from 'is-electron';


let storage;
// The only time IS_ELECTRON will be 1 is for the electron build.
if (isElectron()){
    const createElectronStore = require("electron-store-webpack-wrapper").default;
    const createElectronStorage = require("redux-persist-electron-storage");
    console.log("Electron!")
    console.log(createElectronStore)
    console.log(createElectronStorage)
    const electronStore = createElectronStore({
        // your electron-store options here
    })
    storage = createElectronStorage({
        electronStore
    })
} else {
    console.log("Web!")
    storage = require('redux-persist/lib/storage').default;
}
console.log(storage)
export default storage;