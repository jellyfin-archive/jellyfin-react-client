import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    userId: "",
    token: "",
    loginStatus: false
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
                loginStatus: true
            }
        }
    }
})

export type AuthState = ReturnType<typeof reducer>

const { loginSuccessful } = actions

export {
    reducer as authReducer,
    loginSuccessful
}
