import React from "react";
import { CollectionOverviewContainer, CollectionTitle } from "./collection-overview.styles";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { useSelector } from "react-redux";
import { selectCollectionAsArray } from "../../redux/shop/shop.selector";

const CollectionOverview = () => {
    const collections = useSelector(selectCollectionAsArray)
    return (
        <CollectionOverviewContainer>
            <CollectionTitle>Collections</CollectionTitle>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionOverviewContainer>
    )
}

export default CollectionOverview