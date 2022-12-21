import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SignupPageState {}

const initialState: SignupPageState = {};

interface RegisterPayload {
    name: string;
    lastName: string;
    email: string;
    password: string;
}

export const signupPageSlice = createSlice({
    name: 'signupPage',
    initialState: initialState,
    reducers: {
        registerr: (_state, _action: PayloadAction<RegisterPayload>) => {},
    },
});
export const { registerr } = signupPageSlice.actions;
export const signupPageReducer = signupPageSlice.reducer;
