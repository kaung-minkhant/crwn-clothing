import React from "react";
import './collection-item.styles.scss'

import CustomButton from '../custom-buttom/custom-buttom.component'

// import { connect } from "react-redux";
// import { addItemToCart } from '../../redux/cart/cart.actions'
import { useDispatch } from "react-redux";
import { addItemToCart } from '../../redux/cart/cartSlice'

const CollectionItem = ({ item }) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => dispatch(addItemToCart(item))} inverted>Add to cart</CustomButton>
        </div >
    );
}

// const mapDispatchToProps = dispatch => ({
//     addItem: (item) => dispatch(addItemToCart(item))
// })

// export default connect(null, mapDispatchToProps)(CollectionItem);
export default CollectionItem;