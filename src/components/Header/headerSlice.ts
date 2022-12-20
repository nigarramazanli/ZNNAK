import { User } from '../../models/User';
import { createSlice } from '@reduxjs/toolkit';
import { register } from '../../pages/SignUpPage/signupPageSlice';

interface HeaderState {
    itemsCount: number;
    currentUser: User | undefined;
}

const initialState: HeaderState = {
    itemsCount: 0,
    currentUser: undefined,
};

export const headerSlice = createSlice({
    name: 'header',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register, (state, action) => {
            const payload = action.payload;
            const user: User = {
                id: 4,
                name: payload.name,
                lastName: payload.lastName,
                avatar: '',
                balance: 1234,
                email: payload.email,
            };
            state.currentUser = user;
        });
    },
});

export const headerReducer = headerSlice.reducer;
