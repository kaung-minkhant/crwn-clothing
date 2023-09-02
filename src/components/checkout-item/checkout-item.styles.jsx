import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: fit-content;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    text-align: center;
`

export const ImageContainer = styled.div`
    width: 22%;
    height: fit-content;
    flex-shrink: 0;
`

export const ItemImage = styled.img`
    width: 70%;
    height: 70%;
`

export const DescriptionPriceSpan = styled.span`
    width: 22%;
    flex-shrink: 0;
`

export const ArrowContainer = styled.div`
    cursor: pointer;
`

export const RemoveContainer = styled.div`
    width: 100%
`

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`

export const ValueSpan = styled.div`
    margin: 0 10px;
`

export const QuantitySpan = styled.span`
    width: 22%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
`