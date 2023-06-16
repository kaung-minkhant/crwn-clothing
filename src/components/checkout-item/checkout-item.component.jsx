import React from "react";
import './checkout-item.styles.scss'

import { useDispatch } from "react-redux";
import { deleteItemFromCart, removeItemFromCart, addItemToCart } from "../../redux/cart/cartSlice";


const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    const dispatch = useDispatch();
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="description">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => dispatch(removeItemFromCart(cartItem))}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => dispatch(addItemToCart(cartItem))}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-container">
                <div className="remove-button" onClick={() => dispatch(deleteItemFromCart(cartItem))}> &#10005;</div>
            </div>
        </div>
    );
}

export default CheckoutItem