import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0
    )
)

export const selectPriceTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
        0
    )
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)