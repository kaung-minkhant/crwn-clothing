import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingBag } from '../../assets/122 shopping-bag.svg'

import { toggleCartHidden } from "../../redux/cart/cart.actions"

import './cart-icon.styles.scss'

import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    console.log('Rerendered')
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingBag className="shopping-bag" />
            <span className="item-count"> {itemCount} </span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);