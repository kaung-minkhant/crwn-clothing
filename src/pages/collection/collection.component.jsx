import React from "react";
import CollectionStyles from "./collection.styles";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

const CollectionPage = ({ match }) => {
    const collection = useSelector(selectCollection(match.params.collectionID))
    return (
        < CollectionStyles.CollectionPageContainer>
            <CollectionStyles.CollectionTitleH1>{collection.title}</CollectionStyles.CollectionTitleH1>
            <CollectionStyles.CollectionItemsContainer>
                {
                    collection.items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </CollectionStyles.CollectionItemsContainer>
        </CollectionStyles.CollectionPageContainer >
    )
}

export default CollectionPage