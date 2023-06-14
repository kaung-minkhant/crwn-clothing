import React from "react";
import './cart-dropdown.styles.scss'

import CartItem from "../cart-item/cart-item.component";
import CustomButton from '../custom-buttom/custom-buttom.component'

import { withRouter } from "react-router-dom";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";


const CartDropdown = ({ history }) => {
    const cartItems = useSelector(selectCartItems);
    // console.log(cartItems)
    return (
        < div className="cart-dropdown" >
            <div className="cart-items">
                {
                    cartItems.length ?
                        (cartItems.map(
                            cartItem => (< CartItem key={cartItem.id} item={cartItem} />)
                        ))
                        : (<span className="empty-message">Cart is empty!</span>)
                }
            </div>
            <CustomButton onClick={() => {
                history.push("/checkout")
            }}>go to checkout</CustomButton>
        </div >
    );
}

// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems
// })

// export default connect(mapStateToProps)(withRouter(CartDropdown));
export default withRouter(CartDropdown);