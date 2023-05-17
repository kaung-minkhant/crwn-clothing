import React from "react";
import './cart-dropdown.styles.scss'
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

import CustomButton from '../custom-buttom/custom-buttom.component'

const CartDropdown = ({ cartItems }) => {
    // console.log(cartItems)
    return (
        < div className="cart-dropdown" >
            <div className="cart-items">
                {
                    cartItems.map(
                        cartItem => (< CartItem key={cartItem} item={cartItem} />)
                    )
                }
            </div>
            <CustomButton>go to checkout</CustomButton>
        </div >
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);