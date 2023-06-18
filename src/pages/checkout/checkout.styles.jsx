import styled from "styled-components";




export const CheckoutPageContainer = styled.div`
    width: 70%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`

export const CheckOutHeaderContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    border-bottom: 1px solid darkgray;
    text-align: center;
`

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 22%;

    &:last-child {
        width: 12%;
    }
`

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`

export const CardWarningContainer = styled.div`
    margin-top: 40px;
    color: red;
    text-align: center;
    font-size: 24px;
`

export const StripeCheckoutButtomWithStyle = styled.div`
    margin-top: 40px;
    margin-left: auto;
`
const CheckOutStyles = {
    CheckOutHeaderContainer,
    CheckoutPageContainer,
    HeaderBlockContainer,
    TotalContainer,
    CardWarningContainer,
    StripeCheckoutButtomWithStyle
}

export default CheckOutStyles;