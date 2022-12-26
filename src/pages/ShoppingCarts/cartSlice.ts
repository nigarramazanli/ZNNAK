import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/Product';

interface CartPageState {
    productsInCart: Product[];
}

const initialState: CartPageState = {
    productsInCart: [],
};

interface AddProductToCartPayload {
    product: Product;
}

export const cartPageSlice = createSlice({
    name: 'cartPage',
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<AddProductToCartPayload>) => {
            state.productsInCart.push(action.payload.product);
        },
        removeProductFromCart: (state, action: PayloadAction<number>) => {
            state.productsInCart = state.productsInCart.filter((product) => product.id !== action.payload);
        },
    },
});

export const { addProductToCart, removeProductFromCart } = cartPageSlice.actions;

export const cartPageReducer = cartPageSlice.reducer;
