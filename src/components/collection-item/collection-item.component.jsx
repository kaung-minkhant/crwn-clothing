import React from "react";
import { AddtoCartButton, CollectionFooterContainer, CollectionItemContainer, ItemBackgroundImageContainer, ItemNameSpan, ItemPriceSpan } from "./collection-item.styles";

import CustomButton from '../custom-buttom/custom-buttom.component'

// import { connect } from "react-redux";
// import { addItemToCart } from '../../redux/cart/cart.actions'
import { useDispatch } from "react-redux";
import { addItemToCart } from '../../redux/cart/cartSlice'

const CollectionItem = ({ item }) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <ItemBackgroundImageContainer className="image"
                imageUrl={imageUrl}
            />
            <CollectionFooterContainer>
                <ItemNameSpan>{name}</ItemNameSpan>
                <ItemPriceSpan>{price}</ItemPriceSpan>
            </CollectionFooterContainer>
            <AddtoCartButton as={CustomButton} onClick={() => dispatch(addItemToCart(item))} inverted>Add to cart</AddtoCartButton>
        </CollectionItemContainer>
    );
}

// const mapDispatchToProps = dispatch => ({
//     addItem: (item) => dispatch(addItemToCart(item))
// })

// export default connect(null, mapDispatchToProps)(CollectionItem);
export default CollectionItem;