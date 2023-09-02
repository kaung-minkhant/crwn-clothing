import styled from "styled-components";

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    cursor: pointer;
    ${({ collectionPage }) => collectionPage ? "padding-bottom: 20px;" : ""}

    &:hover {
        .image {
            opacity: 0.8;
        }

        button {
            display: block;
            opacity: 0.85;
        }
    }
`

export const ItemBackgroundImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-position: center;
    background-size: cover;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const ItemNameSpan = styled.span`
    with: fit-content;
    margin-bottom: 15px;
`

export const ItemPriceSpan = styled.span`
    width: fit-content;
`

export const AddtoCartButton = styled.div`
    position: absolute;
    top: 270px;
    display: none;
`