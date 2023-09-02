import React from "react";
import { ArrowContainer, CheckoutItemContainer, DescriptionPriceSpan, ImageContainer, ItemImage, QuantitySpan, RemoveButton, RemoveContainer, ValueSpan } from "./checkout-item.styles";

import { useDispatch } from "react-redux";
import { deleteItemFromCart, removeItemFromCart, addItemToCart } from "../../redux/cart/cartSlice";


const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    const dispatch = useDispatch();
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <ItemImage alt="item" src={imageUrl} />
            </ImageContainer>
            <DescriptionPriceSpan>{name}</DescriptionPriceSpan>
            <QuantitySpan>
                <ArrowContainer onClick={() => dispatch(removeItemFromCart(cartItem))}>&#10094;</ArrowContainer>
                <ValueSpan>{quantity}</ValueSpan>
                <ArrowContainer onClick={() => dispatch(addItemToCart(cartItem))}>&#10095;</ArrowContainer>
            </QuantitySpan>
            <DescriptionPriceSpan>{price}</DescriptionPriceSpan>
            <RemoveContainer>
                <RemoveButton onClick={() => dispatch(deleteItemFromCart(cartItem))}> &#10005;</RemoveButton>
            </RemoveContainer>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem