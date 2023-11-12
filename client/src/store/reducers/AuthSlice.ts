import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

const initialState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: true
}

interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
}


export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: initialState,
    reducers: {
        setIsAuth(state: AuthState, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
        setUser(state: AuthState, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        setLoading(state: AuthState, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },

        
    }
})

export const {
    setIsAuth,
    setUser,
    setLoading
} = AuthSlice.actions

export default AuthSlice.reducer