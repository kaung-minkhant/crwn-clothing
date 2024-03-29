import styled from "styled-components";
import CustomButtom from "../custom-buttom/custom-buttom.component";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 1;
`

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const CheckoutButton = styled(CustomButtom)`
    margin-top: auto;
`

export const EmptyMessageSpan = styled.span`
    font-size: 18px;
    margin: 50px auto;
`