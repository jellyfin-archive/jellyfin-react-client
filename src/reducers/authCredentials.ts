import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../utilities/storage/store";

enum LoginStatus {
    UNAUTHENTICATED = 'UNAUTHENTICATED',
    AUTHENTICATED = 'AUTHENTICATION_SUCCESS',
}

const initialState = {
    username: "",
    userId: "",
    token: "",
    loginStatus: LoginStatus.UNAUTHENTICATED
};

interface LoginSuccessData {
    username: string;
    userId: string;
    token: string;
}

const { reducer, actions } = createSlice({
    name: 'authCredentials',
    initialState,
    reducers: {
        loginSuccessful: (state, action: PayloadAction<LoginSuccessData>) => {
            const { username, userId, token } = action.payload
            return {
                username,
                userId,
                token,
                loginStatus: LoginStatus.AUTHENTICATED
            }
        }
    }
})

const getIsUserAuthenticated = (state: RootState) => state.authCredentials.loginStatus == LoginStatus.AUTHENTICATED

export type AuthState = ReturnType<typeof reducer>

const { loginSuccessful } = actions

export {
    reducer as authReducer,
    loginSuccessful,
    getIsUserAuthenticated
}
