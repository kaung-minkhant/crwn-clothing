import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingBag } from '../../assets/122 shopping-bag.svg'

import { toggleCartHidden } from "../../redux/cart/cart.actions"

import './cart-icon.styles.scss'

const CartIcon = (props) => {
    return (
        <div className="cart-icon" onClick={props.toggleCartHidden}>
            <ShoppingBag className="shopping-bag" />
            <span className="item-count"> 0 </span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);