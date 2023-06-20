import React from "react";
import { CollectionOverviewContainer, CollectionTitle } from "./collection-overview.styles";

import CollectionPreviewContainer from "../collection-preview/collection-preview.container";

import { useSelector } from "react-redux";
import { selectCollectionAsArray } from "../../redux/shop/shop.selector";

const CollectionOverview = () => {
    const collections = useSelector(selectCollectionAsArray)
    return (
        <CollectionOverviewContainer>
            <CollectionTitle>Collections</CollectionTitle>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreviewContainer key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionOverviewContainer>
    )
}

export default CollectionOverview