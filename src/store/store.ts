import { cartPageReducer } from '../pages/ShoppingCarts/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { headerReducer } from '../components/Header/headerSlice';
import { profileReducer } from '../pages/ProfilePage/profilePageSlice';
import { signupPageReducer } from '../pages/SignUpPage/signupPageSlice';

export const store = configureStore({
    reducer: {
        header: headerReducer,
        profilePage: profileReducer,
        signupPage: signupPageReducer,
        cartPage: cartPageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
