import React from "react";
import './collection-overview.styles.scss'

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { useSelector } from "react-redux";
import { selectCollectionAsArray } from "../../redux/shop/shop.selector";

const CollectionOverview = () => {
    const collections = useSelector(selectCollectionAsArray)
    return (
        <div className="collection-overview">
            <h1 className="collection-title">Collections</h1>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default CollectionOverview