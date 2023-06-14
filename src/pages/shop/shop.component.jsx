import React from "react";
import './shop.styles.scss'

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { useSelector } from "react-redux";
import { selectShopItems } from "../../redux/shop/shop.selector";



const ShopPage = () => {
    const collections = useSelector(selectShopItems)
    return (
        <div className="shop-page">
            <h1 className="shop-title">Collections</h1>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}


export default ShopPage;