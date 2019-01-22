import createSensitiveStorage from 'redux-persist-sensitive-storage';

export default createSensitiveStorage({
    keychainService: "jellyfinKeychain",
    sharedPreferencesName: "jellyfinSharedPrefs"
});