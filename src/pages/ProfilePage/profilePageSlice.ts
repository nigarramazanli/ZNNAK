import { User } from '../../models/User';
import { createSlice } from '@reduxjs/toolkit';

interface ProfilePageState {
    currentUser: User | undefined;
    favoriteProducts: string;
}

const initialState: ProfilePageState = {
    currentUser: undefined,
    favoriteProducts: '',
};

export const profilePageSlice = createSlice({
    name: 'profilePage',
    initialState: initialState,
    reducers: {},
});

export const profileReducer = profilePageSlice.reducer;
