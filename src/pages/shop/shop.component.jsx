import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import './shop.styles.scss'


class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.states = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.states;
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;