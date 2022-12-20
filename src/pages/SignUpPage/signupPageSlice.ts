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
        register: (_state, _action: PayloadAction<RegisterPayload>) => {},
    },
});
export const { register } = signupPageSlice.actions;
export const signupPageReducer = signupPageSlice.reducer;
