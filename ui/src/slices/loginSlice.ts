import { createSlice } from "@reduxjs/toolkit";

interface ILoginState {
    isAuth: boolean;
}

const initialState: ILoginState = {
    isAuth: false
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        }
    }
})

export const { setIsAuth } = loginSlice.actions