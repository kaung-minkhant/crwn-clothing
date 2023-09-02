import React from "react";
import { CartDropdownContainer, CartItemsContainer, CheckoutButton, EmptyMessageSpan } from "./cart-dropdown.styles";


import CartItem from "../cart-item/cart-item.component";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";


const CartDropdown = ({ history }) => {
    const cartItems = useSelector(selectCartItems);
    // console.log(cartItems)
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        (cartItems.map(
                            cartItem => (< CartItem key={cartItem.id} item={cartItem} />)
                        ))
                        : (<EmptyMessageSpan>Cart is empty!</EmptyMessageSpan>)
                }
            </CartItemsContainer>
            <CheckoutButton onClick={() => {
                history.push("/checkout")
            }}>go to checkout</CheckoutButton>
        </CartDropdownContainer >
    );
}

// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems
// })

// export default connect(mapStateToProps)(withRouter(CartDropdown));
export default CartDropdown;