export const addItemToCartWithQuantity = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id)

    if (existingCartItem) {
        cartItems.forEach((cartItem, index) => {
            if (cartItem.id === cartItemToAdd.id) {
                cartItems[index].quantity = cartItems[index].quantity + 1;
            }
        })
    } else {
        cartItems.push({ ...cartItemToAdd, quantity: 1 });
    }
}

export const removeItemFromCartWithQuantity = (cartItems, cartItemToRemove) => {
    const itemToRemove = cartItems.filter(cartItem => cartItem.id === cartItemToRemove.id)
    if (itemToRemove[0].quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    } else {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        )

    }

}