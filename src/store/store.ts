import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        //testPage: testPageReducer,
        //cartPage: cartPageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
