import React from "react";
import './cart-icon.styles.scss'

import { ReactComponent as ShoppingBag } from '../../assets/122 shopping-bag.svg'

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
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingBag className="shopping-bag" />
            <span className="item-count"> {itemCount} </span>
        </div>
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