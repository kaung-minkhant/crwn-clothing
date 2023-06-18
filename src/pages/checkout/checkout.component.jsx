import React from "react";
import CheckOutStyles from './checkout.styles'

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
        <CheckOutStyles.CheckoutPageContainer>
            <CheckOutStyles.CheckOutHeaderContainer>
                <CheckOutStyles.HeaderBlockContainer>
                    <span>Product</span>
                </CheckOutStyles.HeaderBlockContainer>
                <CheckOutStyles.HeaderBlockContainer>
                    <span>Description</span>
                </CheckOutStyles.HeaderBlockContainer>
                <CheckOutStyles.HeaderBlockContainer>
                    <span>Quantity</span>
                </CheckOutStyles.HeaderBlockContainer>
                <CheckOutStyles.HeaderBlockContainer>
                    <span>Price</span>
                </CheckOutStyles.HeaderBlockContainer>
                <CheckOutStyles.HeaderBlockContainer>
                    <span>Remove</span>
                </CheckOutStyles.HeaderBlockContainer>
            </CheckOutStyles.CheckOutHeaderContainer>
            {
                cartItems.map(
                    cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                )
            }
            <CheckOutStyles.TotalContainer>
                <span>TOTAL: ${totalPrice}</span>
            </CheckOutStyles.TotalContainer>

            <CheckOutStyles.CardWarningContainer>
                *Please use the following credit information for test payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
            </CheckOutStyles.CardWarningContainer>
            <CheckOutStyles.StripeCheckoutButtomWithStyle>
                <StripeCheckoutButton price={totalPrice} />
            </CheckOutStyles.StripeCheckoutButtomWithStyle>
        </CheckOutStyles.CheckoutPageContainer>
    );
}

// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems,
//     totalPrice: selectPriceTotal
// })

// export default connect(mapStateToProps)(CheckoutPage);
export default CheckoutPage;