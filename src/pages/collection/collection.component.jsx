import React from "react";
import './collection.styles.scss'

import CollectionItem from "../../components/collection-item/collection-item.component";

import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

const CollectionPage = ({ match }) => {
    const collection = useSelector(selectCollection(match.params.collectionID))
    return (
        < div className="collection-page" >
            <h1 className="title">{collection.title}</h1>
            <div className="items">
                {
                    collection.items.map(item => (
                        <CollectionItem item={item} />
                    ))
                }
            </div>
        </div >
    )
}

export default CollectionPage