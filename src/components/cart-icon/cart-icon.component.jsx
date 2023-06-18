import React from "react";
import { CartIconContainer, ItemCountSpan, ShoppingBackIcon } from "./cart-icon.styles";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { useSelector, useDispatch } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from '../../redux/cart/cartSlice'

const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();
    return (
        <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingBackIcon />
            <ItemCountSpan> {itemCount} </ItemCountSpan>
        </CartIconContainer>
    );
}

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// })

// const mapStateToProps = createStructuredSelector({
//     itemCount: selectCartItemsCount
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
export default CartIcon;