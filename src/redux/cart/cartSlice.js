import { createSlice } from "@reduxjs/toolkit";
import { addItemToCartWithQuantity, removeItemFromCartWithQuantity } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: INITIAL_STATE,
    reducers: {
        toggleCartHidden: (state) => {
            state.hidden = !state.hidden;
        },
        addItemToCart: (state, action) => {
            addItemToCartWithQuantity(state.cartItems, action.payload);
        },
        deleteItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = removeItemFromCartWithQuantity(state.cartItems, action.payload)
        }
    }
})

export const { toggleCartHidden, addItemToCart, deleteItemFromCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;