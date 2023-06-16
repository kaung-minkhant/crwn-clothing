import React from "react";
import './checkout.styles.scss'

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import { selectCartItems, selectPriceTotal } from "../../redux/cart/cart.selector";


const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectPriceTotal);
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(
                    cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                )
            }
            <div className="total">
                <span>TOTAL: ${totalPrice}</span>
            </div>

            <div className="card-warning">
                *Please use the following credit information for test payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
            </div>
            <StripeCheckoutButton price={totalPrice} />
        </div>
    );
}

// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems,
//     totalPrice: selectPriceTotal
// })

// export default connect(mapStateToProps)(CheckoutPage);
export default CheckoutPage;