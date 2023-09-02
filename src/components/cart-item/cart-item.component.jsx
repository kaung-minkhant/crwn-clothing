import React from "react";
import { CartItemContainer, CartItemDetailsContainer, CartItemImage, CartItemNameSpan } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="cart item" />
            <CartItemDetailsContainer>
                <CartItemNameSpan>{name}</CartItemNameSpan>
                <span>{quantity} x ${price}</span>
            </CartItemDetailsContainer>
        </CartItemContainer>
    );
}

export default CartItem;